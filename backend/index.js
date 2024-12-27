import {GoogleGenerativeAI} from "@google/generative-ai";
import * as dotenv from 'dotenv'
dotenv.config()
import cors from "cors"
import bodyParser from "body-parser"
import express from "express"
import multer from 'multer'

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json()); // Use express.json() instead of deprecated bodyParser

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const bufferToGenerativePart = (buffer, mimeType) => {
    return {
        inlineData: {
            data: buffer.toString("base64"),
            mimeType
        },
    };
}

async function run(prompt, res) {
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const result = await model.generateContentStream([prompt]);

        // Set appropriate headers for streaming
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Iterate through the stream and send chunks
        for await (const chunk of result.stream) {
            const chunkText = chunk.text(); //await here
            // res.write(`data: ${chunkText}\n\n`);
            res.write(`${chunkText}\n\n`);

            console.log(chunkText)
        }

        res.end();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
}

/*image related function*/

const runImage = async (imageBuffers, imagePrompt) => {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = imagePrompt

    const imageParts = imageBuffers.map(buffer => bufferToGenerativePart(buffer, "image/jpeg"));

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
}

// Multer memory storage
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

/********************* RouteHandling 👇**************************/
/********************* RouteHandling 👇**************************/
/********************* RouteHandling 👇**************************/


//Handling text only queries.
app.post('/', async (req, res) => {
    // console.log(req.body);
    const question = req.body?.question; // Use optional chaining

    if (!question) {
        return res.status(400).json({ error: 'Missing question in request body' });
    }

    await run(question, res);
});

app.post('/images', upload.array('avatar', 16), async function (req, res) {
    const imageBuffers = req.files.map(file => file.buffer)
    const promptData = req.body.promptData

    const imageResult = await runImage(imageBuffers, promptData)
    res.json({'imgResult': imageResult})
})


app.listen(port, () => {
    console.log(`Application listening on ${port}`);
});
