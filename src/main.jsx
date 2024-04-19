import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import Layout from "./components/landingPage/Layout.jsx";
import SignIn from "./components/landingPage/SignIn.jsx";
import NewInput from "./components/landingPage/NewInput.jsx";

import Auth from "./components/auth/ProtectedRoute.jsx"
import Login from "./components/auth/pages/Login.jsx"
import Signup from "./components/auth/pages/Signup.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/app" element={<App />} />
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/new-input" element={<NewInput/>} />
              <Route path="/auth" element={<Auth/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />

          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
