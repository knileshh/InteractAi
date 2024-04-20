import './App.css';
import ChatContainer from "./components/Ai Comps/ChatContainer.jsx";

function App() {
    return (
        <div className="relative flex justify-center items-end min-h-screen bg-gray-100 pb-8">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                <h1 className="text-9xl font text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-red-200 animate-pulse-slow">Interact Ai</h1>
            </div>
            <div className="z-10">
                <ChatContainer />
            </div>
        </div>
    );
}

export default App;