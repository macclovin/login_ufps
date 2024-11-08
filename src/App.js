import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';

// Importing pages
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))


// Initializing different libraries
initializeApp()


// Check for login and initialize axios
const token = checkAuth()


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])

  const modulo=localStorage.getItem("modulo")


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-contraseña" element={<ForgotPassword />} />
          <Route path="/crear-cuenta" element={<Register />} />
          

          <Route path="*" element={<Navigate to={"/login"} replace />}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
