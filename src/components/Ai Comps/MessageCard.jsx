
const MessageCard = ({ message, isAssistant }) => { //Message: the data , isAssistant = True/False(===)

    //Just defining a class based on isAssistant
    //max-w-2xl mx-auto my-4 p-4
    // const cardClass = `max-w-2xl mx-auto my-4 p-4 rounded-lg shadow-md ${isAssistant ? 'bg-gray-100' : 'bg-blue-100'}`;
    //choosing color for card class

    return (
        //Using the cardClass defined above, for colors.
        <div className={`max-w-2xl mx-auto my-4 p-4 rounded-lg shadow-md ${isAssistant ? 'bg-gray-100' : 'bg-blue-100'}`}>
            <div className="flex items-center mb-2">

                {/*The profile circle*/}
                <div
                    className={`w-8 h-8 rounded-full ${
                        isAssistant ? 'bg-gray-300' : 'bg-blue-300'
                    } mr-2`}
                />


                {/*The name ChatGPT or You*/}
                <span className={`text-sm font-semibold ${isAssistant ? 'text-gray-700' : 'text-blue-700'}`}>
                    {/*  If true then ChatGPT else You, After */}
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