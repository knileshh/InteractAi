import {useState, useEffect, Suspense} from 'react';
import DataStream from "./components/DataStream.jsx";
import './App.css';
import PromptBase from './components/PromptBase';
import ChatContainer from "./components/Ai Comps/ChatContainer.jsx";


function App() {

    return (
        // <PromptBase/>
        // <DataStream/>
        <ChatContainer/>

    );
}

export default App;
