import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import AdminPage from './components/AdminPage'


function App() {


  return (
    <>
  
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<AdminPage />}/>
        
       
      </Routes>
    </>
  )
}

export default App
