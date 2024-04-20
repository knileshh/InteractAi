import OnlyLogo from "../Assets/OnlyLogo.png"
import './App.css';
import { Link } from "react-router-dom"
import ChatContainer from "./components/Ai Comps/ChatContainer.jsx";
function App() {
    return (
        <div className="relative flex justify-center items-end min-h-screen bg-gray-100 pb-8">
            <Link to="/" className="absolute top-4 left-4 z-20">
                <img src={OnlyLogo} alt="Logo" className="h-8 w-auto opacity-50" />
            </Link>
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