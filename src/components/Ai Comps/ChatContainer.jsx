import { useState, useEffect, useRef } from 'react';
import MessageCard from './MessageCard';
import UploadFile from '../UploadFile';
import FilePreview from '../FilePreview';

const ChatContainer = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [files, setFiles] = useState([]);
    const [imgResult, setImgResult] = useState(null);
    const [streamedMessage, setStreamedMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messageStreamRef = useRef(null);

    const handleMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleFileChange = (newFiles) => {
        setFiles(newFiles);
    };

    const handleFileUpload = async (newFiles) => {
        try {
            const formData = new FormData();
            newFiles.forEach((file) => {
                formData.append('avatar', file);
            });
            formData.append('promptData', newMessage);

            const response = await fetch('http://localhost:3000/images', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload files');
            }

            const data = await response.json();
            setMessages((prevMessages) => [...prevMessages, { sender: 'assistant', text: data.imgResult }]);
            setImgResult(data.imgResult);
            console.log('Files uploaded successfully->>>:', data.imgResult);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        if (newMessage.trim() || files.length > 0) {
            setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: newMessage }]);
            setStreamedMessage('');
            setIsLoading(true);
            setNewMessage('');
            if (files.length > 0) {
                await handleFileUpload(files);
            } else {
                await fetchData(newMessage);
            }
            setIsLoading(false);
            setFiles([]);
        }
    };

    const fetchData = async (userData) => {
        const userPrompt = userData
        try {
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: userPrompt }),
            });

            const reader = response.body.getReader();
            let receivedData = '';
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                const data = new TextDecoder().decode(value);
                receivedData += data;
                setStreamedMessage(receivedData);
            }
            setMessages((prevMessages) => [...prevMessages, { sender: 'assistant', text: receivedData }]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (messageStreamRef.current) {
            messageStreamRef.current.scrollTop = messageStreamRef.current.scrollHeight;
        }
    }, [messages]);

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
                {isLoading && (
                    <div
                        className="max-w-2xl mx-auto my-4 p-4 rounded-lg shadow-md bg-gray-100"
                        ref={messageStreamRef}
                    >
                        <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-gray-300 mr-2">
                                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW5qZzE0aG12MjdwMW5jaWUxMjBwOGw2YTYyMW1uM3VhcmJscWFmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RgzryV9nRCMHPVVXPV/giphy.gif" alt="Avatar" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Interact Ai</span>
                        </div>
                        <div className="text-gray-800 whitespace-pre-wrap">{streamedMessage}</div>
                    </div>
                )}
            </div>

            <form onSubmit={handleMessageSubmit} className="w-full max-w-md flex items-center">
                <div className="flex items-center mr-2">
                    <UploadFile
                        onFileChange={handleFileChange}
                        onUpload={handleFileUpload}
                    />
                    <input
                        type="text"
                        value={newMessage}
                        onChange={handleMessageChange}
                        placeholder="Type your message..."
                        className="flex-grow px-4 py-2 mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FilePreview files={files} />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatContainer;