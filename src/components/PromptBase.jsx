function PromptBase() {
    return (
      <div className="max-w-3xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col">
        <div className="flex-grow bg-slate-900 rounded-lg p-4 mb-4 overflow-y-auto">
          Here will be prompts
        </div>
        <div className="bg-black rounded-md p-2">
          <input
            type="text"
            className="w-full bg-black text-white text-xs outline-none border-none focus:ring-1 focus:ring-blue-400 p-2"
            placeholder="Enter your prompt..."
          />
        </div>
      </div>
    );
  }

export default PromptBase