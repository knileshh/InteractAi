import React, { useState } from 'react';
import MessageCard from './MessageCard';

const ChatContainer = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    //Just set a newMessage taking from the input field.
    const handleMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    //Append the new message to message, and set new message to "", blank
    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            // setMessages((prevMessages) => [
            //     ...prevMessages,
            //     { sender: 'user', text: newMessage },
            // ]);

            setMessages((prevMessages) => [...prevMessages,{ sender: 'user', text: newMessage }]);
            // Just appending this to message

            setNewMessage('');
            // Here, you can call your API to get the assistant's response
            // and append it to the messages array using setMessages
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-screen-xl">
                {/*iterating over message array to get the messages*/}
                {messages.map((message, index) => (
                    <MessageCard
                        key={index}
                        message={message.text}
                        isAssistant={message.sender === 'assistant'}
                    />
                ))}
            </div>

            {/*trigger handleMessageSubmit on submit, which setMessage[] and then newMessage[] to ""*/}
            <form onSubmit={handleMessageSubmit} className="w-full max-w-md">
                <div className="flex items-center mt-4">
                    <input
                        type="text"
                        value={newMessage}
                        // setting up a newMessage[]
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