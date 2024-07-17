import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import Admin from './components/Admin'
function App() {


  return (
    <>
  
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App
