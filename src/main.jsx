import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import Layout from "./components/landingPage/Layout.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/app" element={<App />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
