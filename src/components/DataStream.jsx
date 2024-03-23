import React, { useState, useEffect } from 'react';

const DataStream = () => {
    const [streamData, setStreamData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any other headers if needed
                    },
                    body: JSON.stringify({ question: 'HI, give me really long story.' }),
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

        fetchData();

        // Cleanup function if needed
        return () => {
            // Any cleanup code here
        };
    }, []);

    return (
        <div>
            {/* Render the streaming data here */}
            {streamData.map((data, index) => (
                <div key={index}>{data}</div>
            ))}
        </div>
    );
};

export default DataStream;