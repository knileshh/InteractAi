import React from 'react';

const MessageCard = ({ message, isAssistant }) => {
    if (!message) {
        // Render nothing if the message is falsy (e.g., empty string)
        return null;
    }

    return (
        <div className={`max-w-2xl mx-auto my-4 p-4 rounded-lg shadow-md ${isAssistant ? 'bg-gray-100' : 'bg-gray-400'}`}>
            <div className="flex items-center mb-2">
                <div className={`w-8 h-8 rounded-full ${isAssistant ? 'bg-gray-300' : 'bg-blue-300'} mr-2`}>
                    <img src="https://makeavatar.io/svgavatars/images/Male.webp" alt="Avatar" />
                </div>
                <span className={`text-sm font-semibold ${isAssistant ? 'text-gray-700' : 'text-blue-700'}`}>
                    {isAssistant ? 'ChatGPT' : 'You'}
                </span>
            </div>
            <div className={`text-gray-800 ${isAssistant ? '' : 'text-blue-800'}`}>
                {message}
            </div>
        </div>
    );
};

export default MessageCard;