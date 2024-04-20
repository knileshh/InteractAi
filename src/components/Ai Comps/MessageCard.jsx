import React from 'react';
import ReactMarkdown from 'react-markdown';
const MessageCard = ({ message, isAssistant }) => {
    if (!message) {
        // Render nothing if the message is falsy (e.g., empty string)
        return null;
    }

    return (
        <div className={`max-w-2xl mx-auto my-4 p-4 rounded-lg shadow-md ${isAssistant ? 'bg-red-100' : 'bg-blue-100'}`}>
            <div className="flex items-center mb-2">
                <div className={`w-8 h-8 rounded-full ${isAssistant ? 'bg-white-300' : 'bg-blue-300'} mr-2`}>
                    {isAssistant ? <img src="../../../Assets/OnlyLogo.png" alt="Avatar" /> : <img src="../../../Assets/avatar.png"/>}
                </div>
                <span className={`text-sm font-semibold ${isAssistant ? 'text-red-700' : 'text-blue-700'}`}>
                    {isAssistant ? 'Interact Ai' : 'You'}
                </span>
            </div>
            <div className={`text-gray-800 ${isAssistant ? '' : 'text-blue-800'}`}>
                <ReactMarkdown>{message}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MessageCard;