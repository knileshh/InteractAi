import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import Layout from "./components/landingPage/Layout.jsx";
import SignIn from "./components/landingPage/SignIn.jsx";
import NewInput from "./components/landingPage/NewInput.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/app" element={<App />} />
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/new-input" element={<NewInput/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
