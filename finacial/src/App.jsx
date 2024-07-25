import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import AdminPage from './components/AdminPage'
import Userpg from './components/Userpg'
import Addincome from './components/Addincome'
import Navbar from './components/Navbar'
import Navbaruser from './components/Navbaruser'
import { Switch } from '@mui/material'
import UserProfile from './components/UserProfile'
import Showexpense from './components/Showexpense'


function App() {


  return (
    <>
  
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/user' element={<Userpg />} />
        <Route path='/addincome' element={<Addincome />} /> 
        <Route path='/userprofile' element={<UserProfile />} /> 
        <Route path='/showexpense' element={<Showexpense />} />
        {/* <Navbaruser /> */}       
      </Routes>

      
    </>
  )
}

export default App
