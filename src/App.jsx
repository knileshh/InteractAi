import { useState } from 'react'
import './App.css'
import PromptBase from './components/PromptBase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-stone-900 text-white p-4 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-orange-200">Ask Ai</h1>
      <PromptBase />
    </div>
  );
}

export default App
