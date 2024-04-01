import { GoogleGenerativeAI } from "@google/generative-ai";
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

// eslint-disable-next-line no-undef
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const fileToGenerativePart = (path, mimeType) => {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

// const fileToGenerativePart = (path, mimeType) => {
//     const fileData = fs.readFileSync(path);
//     return {
//         inlineData: {
//             data: fileData.toString('base64'),
//             mimeType,
//         },
//     };
// };

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

    // const prompt = "What are the contents of these files";
    const prompt = imagePrompt

    console.log(imagePath)
    const imageParts = [
        fileToGenerativePart(`${imagePath}`, "image/jpg"), //change to jpg
        fileToGenerativePart("./uploads/twoParrots.jpg", "image/jpeg"),
    ];

    // const imageParts = imagePath.map(imagePath => {
    //     // const mimeType = path.endsWith('.png') ? 'image/png' : 'image/jpg';
    //     // return fileToGenerativePart(imagePath, mimeType)
    //     return fileToGenerativePart(imagePath, 'image/jpg')
    //
    // })

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
    //
    // const responseTexts = await Promise.all(result.response.map(response => response.text()));
    //
    // console.log(responseTexts);
    // return responseTexts;
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


app.post('/', async (req, res) => {
    // console.log(req.body);
    const question = req.body?.question; // Use optional chaining

    if (!question) {
        return res.status(400).json({ error: 'Missing question in request body' });
    }

    await run(question, res);
});


app.post('/singleImage', upload.single('avatar'), async (req, res, next) => {
    // req.file is the `avatar` file
    const { originalname, path } = req.file;
    const { promptData } = req.body
    // console.log(req.body)


    // console.log(req.file);
    console.log(path)
    const imageResult = await runImage(path, promptData)
    // console.log(imageResult)

    // Send a message to the user indicating successful upload
    res.json({"image Successfully Uploaded: ": originalname,
                "Answer": imageResult}); //somehow res.send() wasn't working so changed to .json()

    // Redirect after
});

app.post('/images', upload.single('avatar'), async function (req, res, next) {
    // upload.array('avatar', 16)
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    // const { files } = req;

    // const results = await Promise.all(files.map(async file => {
        const { originalname, path } = req.file;
        // return path;
    console.log(path)
    console.log(req.files)
    // const { originalname, path} = req.file;
    // const { promptData } = req.body;

    const promptData = "What are these"
    // const imageResult = await runImage(path, promptData)

    const imageResult = await runImage(path, promptData)
    //Here results is an object containing all the paths.

    // res.json({"image Successfully Uploaded: ": originalname,"Answer": imageResult}); //somehow res.send() wasn't working so changed to .json()
    res.json({'Image Result': imageResult})
})


app.listen(port, () => {
    console.log(`Application listening on ${port}`);
});
