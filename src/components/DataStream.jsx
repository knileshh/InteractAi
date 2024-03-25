import React, { useState, useEffect } from 'react';

const DataStream = () => {
    const [streamData, setStreamData] = useState([]);
    const [promptData, setPromptData] = useState("");

    // useEffect(() => {
    //     // console.log(promptData)
    //
    //
    //     fetchData();
    //
    //     // Cleanup function if needed
    //     return () => {
    //         // Any cleanup code here
    //     };
    // }, []);


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
            {/*<div className="max-h-80 overflow-y-auto max-w-3xl bg-gray-200 rounded shadow-md p-4">*/}
            {/*    /!* Render the streaming data here *!/*/}
            {/*    {streamData.map((data, index) => (*/}
            {/*        <div key={index}>{data}</div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div className="flex min-h-screen justify-center bg-slate-900 p-4">
                <div className="max-w-2xl rounded bg-zinc-900 p-4 text-red-200 shadow-md">{/* Render the streaming data here */}
                    {streamData.map((data, index) => (
                        <div key={index}>{data}</div>
                    ))}</div>


                <div
                    className="fixed bottom-1 left-1/2 m-8 flex min-h-12 w-1/4 -translate-x-1/2 items-center justify-between overflow-hidden rounded-lg bg-slate-300 px-0">
                    <input type="text" placeholder="Enter your query" onChange={ (e) => {
                        setPromptData(e.target.value)
                        // console.log(promptData)
                    }} className="bg-slate-00 h-12 grow pl-2 outline-none"/>
                    <span><button type="button" onClick={ () => fetchData(promptData) } className="border bg-slate-500 px-1">Ask ❓❓</button></span>
                    <span><button type="button" className="border bg-slate-500 px-1">File 📎📍</button></span>
                </div>
            </div>
        </>
    );
};

export default DataStream;