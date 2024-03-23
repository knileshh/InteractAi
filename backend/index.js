import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config' //check this line if error.
import cors from "cors"
import bodyParser from "body-parser"
import express from "express"
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json()); // Use express.json() instead of deprecated bodyParser

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

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

app.post('/', async (req, res) => {
    // console.log(req.body);
    const question = req.body?.question; // Use optional chaining

    if (!question) {
        return res.status(400).json({ error: 'Missing question in request body' });
    }

    await run(question, res);
});

app.listen(port, () => {
    console.log(`Application listening on ${port}`);
});
