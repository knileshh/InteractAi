// DataStream.jsx
import React, { useState, useEffect } from 'react';
import UploadFile from "./UploadFile.jsx";
import FilePreview from "./FilePreview.jsx";
import AlertInfo from "./floatUI/AlertInfo.jsx";
import AlertSuccess from "./floatUI/AlertSuccess.jsx";
import Chat from "./Chat.jsx";
import ChatContainer from "./Ai Comps/ChatContainer.jsx";


const DataStream = () => {
    const [streamData, setStreamData] = useState([]);
    const [promptData, setPromptData] = useState("");
    const [files, setFiles] = useState([]);
    const [responseText, setResponseText] = useState('');


    const handleFileChange = (newFiles) => {
        setFiles(newFiles);
        // setStreamData(newFiles)
    };

    const handleResponse = (data) => {
        // Store the response text in state
        setResponseText(data);
    };

    // Fetch data from gemini Just Text.
    const fetchData = async (userData) => {
        const userPrompt = userData
        try {
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers if needed
                },
                body: JSON.stringify({ question: userPrompt }),
            });

            const reader = response.body.getReader();

            // eslint-disable-next-line no-constant-condition
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                const data = new TextDecoder().decode(value);
                // Parse the data if needed
                setStreamData(prevData => [...prevData, data]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (<>
            {/*<div className="flex min-h-screen justify-center bg-slate-900 p-4">*/}
            {/*    <div*/}
            {/*        className="max-w-2xl rounded bg-zinc-900 p-4 text-red-200 shadow-md">/!* Render the streaming data here *!/*/}
            {/*        {streamData.map((data, index) => (*/}
            {/*            <div key={index}>{data}</div>*/}
            {/*        ))}</div>*/}

            {/*    /!*Old Input box with two buttons.*!/*/}
            {/*    <div*/}
            {/*        className="fixed bottom-1 left-1/2 m-8 flex min-h-12 w-1/4 -translate-x-1/2 items-center justify-between overflow-hidden rounded-lg bg-slate-300 px-0">*/}
            {/*        <input type="text" placeholder="Enter your query" onChange={(e) => {*/}
            {/*            setPromptData(e.target.value)*/}
            {/*        }} className="bg-slate-00 h-12 grow pl-2 outline-none"/>*/}
            {/*        <span><button type="button" onClick={() => fetchData(promptData)}*/}
            {/*                      className="border bg-slate-500 px-1">Ask ❓❓</button></span>*/}
            {/*        <span><UploadFile onFileChange={handleFileChange} promptData={promptData} onResponse={handleResponse}/></span>*/}
            {/*    </div>*/}

            {/*    /!*<SearchInput/>*!/*/}


            {/*/!*    File preview div *!/*/}
            {/*<div>*/}
            {/*    <FilePreview files={files}/>*/}
            {/*</div>*/}


            {/*    {responseText && (*/}
            {/*        <span>*/}
            {/*            /!*<AlertInfo response={responseText} setResponse={setResponseText}/>*!/*/}
            {/*            <AlertSuccess response={responseText} setResponse={setResponseText}/>*/}
            {/*        </span>*/}
            {/*    )}*/}

                {/* Parent div main one*/}
            {/*</div>*/}
            {/*    <Chat />*/}
        <ChatContainer/>
        </>
    );
};

export default DataStream;