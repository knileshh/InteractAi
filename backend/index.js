import {GoogleGenerativeAI} from "@google/generative-ai";
import 'dotenv/config' //check this line if error.
import cors from "cors"
import bodyParser from "body-parser"
import express from "express"
import multer from 'multer'

import fs from "fs"

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json()); // Use express.json() instead of deprecated bodyParser

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const fileToGenerativePart = (path, mimeType) => {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

async function run(prompt, res) {
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        const result = await model.generateContentStream([prompt]);

        // Set appropriate headers for streaming
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Iterate through the stream and send chunks
        for await (const chunk of result.stream) {
            const chunkText = chunk.text(); //await here
            res.write(`data: ${chunkText}\n\n`);
            console.log(chunkText)
        }

        res.end();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
}

/*image related function*/

const runImage = async (imagePath, imagePrompt) => {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = imagePrompt
    // console.log("image path in run images: - ",imagePath.map( path => path))

    const imageParts = imagePath.map(path => fileToGenerativePart(`./${path}`, "image/jpeg"));

    // console.log("Imagine Parts: - ", imagineParts)
    // console.log("Image Parts: = ", imageParts)
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;

}

// Multer related
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, file.originalname + '-' + uniqueSuffix + ".jpg")
    }
})

// const upload = multer({ dest: 'uploads/' });
const upload = multer({ storage: storage })


//Handling text only queries.
app.post('/', async (req, res) => {
    // console.log(req.body);
    const question = req.body?.question; // Use optional chaining

    if (!question) {
        return res.status(400).json({ error: 'Missing question in request body' });
    }

    await run(question, res);
});

app.post('/images', upload.array('avatar', 16), async function (req, res, next) {

    //Since, multer therefore body is being modified on contains prompt.
    // console.log(JSON.stringify(req.body, null, 2))

    const mapPath = req.files.map( file => file.path)
    const promptData = req.body.prompt

    const imageResult = await runImage(mapPath, promptData)
    res.json({'Image Result': imageResult})
})


app.listen(port, () => {
    console.log(`Application listening on ${port}`);
});
