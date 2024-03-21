//backend for the Ai

import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// const prompt = "Hi, can you see moon?"

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = "Give me 1 quote from well know books and also give it's author and book name, format should be as a puzzle. Keep it short though"
  
    const result = await model.generateContentStream([prompt]);
    // model.generateContentStream([prompt])
    for await(const chunk of result.stream){
        const chunkText = chunk.text()
        console.log(chunkText)
    }

    // const response = await result.response;
    // const text = response.text();
    // console.log(text);
  }
  
  run();
  
