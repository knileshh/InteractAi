import { useState, useEffect, useRef } from 'react';
import MessageCard from './MessageCard';

const ChatContainer = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [streamedMessage, setStreamedMessage] = useState('');
    const [isSecondQuery, setIsSecondQuery] = useState(false);
    const messageStreamRef = useRef(null);

    const handleMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: newMessage }]);
            setStreamedMessage('');
            setIsSecondQuery(true);
            setNewMessage('');
            await fetchData(newMessage);
        }
    };

    const fetchData = async (userQuery) => {
        try {
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: userQuery }),
            });

            const reader = response.body.getReader();
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                const data = new TextDecoder().decode(value);
                setStreamedMessage((prevData) => prevData + data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const handleStreamedMessageChange = () => {
            if (messageStreamRef.current) {
                messageStreamRef.current.scrollTop = messageStreamRef.current.scrollHeight;
            }
        };

        handleStreamedMessageChange();
    }, [streamedMessage]);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-screen-xl">
                {messages.map((message, index) => (
                    <MessageCard
                        key={index}
                        message={message.text}
                        isAssistant={message.sender === 'assistant'}
                    />
                ))}
                {isSecondQuery && (
                    <div
                        className="max-w-2xl mx-auto my-4 p-4 rounded-lg shadow-md bg-gray-100"
                        ref={messageStreamRef}
                    >
                        <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-gray-300 mr-2">
                                <img src="https://makeavatar.io/svgavatars/images/Male.webp" alt="Avatar" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">ChatGPT</span>
                        </div>
                        <div className="text-gray-800 whitespace-pre-wrap">{streamedMessage}</div>
                    </div>
                )}
            </div>

            <form onSubmit={handleMessageSubmit} className="w-full max-w-md">
                <div className="flex items-center mt-4">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={handleMessageChange}
                        placeholder="Type your message..."
                        className="flex-grow px-4 py-2 mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatContainer;