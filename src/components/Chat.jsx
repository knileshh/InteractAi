import  { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    // Simulate receiving messages from server
    useEffect(() => {
        // Your logic to fetch messages from server
        const fetchMessagesFromServer = async () => {
            // Simulated response from server
            const newMessages = [
                { id: 1, text: 'First message' },
                { id: 2, text: 'Second message' },
                { id: 3, text: 'Third message' }
            ];
            setMessages(prevMessages => [...prevMessages, ...newMessages]);
        };

        fetchMessagesFromServer();
    }, []);

    return (
        <div className="max-w-2xl mx-auto my-4 p-4 bg-gray-800 rounded-lg shadow-md">
            {messages.map(message => (
                <div key={message.id}>
                    <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"><img src="https://makeavatar.io/svgavatars/images/Male.webp" alt="Avatar"/></div>
                        <span className="text-sm font-semibold text-gray-700">Interact Ai</span>
                    </div>
                    <div className="text-gray-800 bg-red-800 p-4 rounded-lg shadow-md">
                        <p>{message.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chat;
