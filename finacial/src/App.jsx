import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import AdminPage from './components/AdminPage'
import Userpg from './components/Userpg'
import Addincome from './components/Addincome'
import UserProfile from './components/UserProfile'
import Showexpense from './components/Showexpense'
import AdminProfile from './components/AdminProfile'
import Useradmin from './components/Useradmin'
import Adminexpenseview from './components/Adminexpenseview'
import Update  from './components/Update'
import Updateadmin from './components/Updateadmin'
import About from './components/About'



function App() {


  return (
    <>
  
      
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/user' element={<Userpg />} />
        <Route path='/addincome' element={<Addincome />} /> 
        <Route path='/userprofile' element={<UserProfile />} /> 
        <Route path='/showexpense' element={<Showexpense />} />
        <Route path='/adminprofile' element={<AdminProfile />} />
        <Route path='/useradmin' element={ <Useradmin/>} />
        <Route path='/useradmin/view' element={<Adminexpenseview />} />
        <Route path='/update' element={<Update/>}/>
        <Route path='/updateadmin' element={<Updateadmin/>}/>
        {/* <Navbaruser /> */}       
      </Routes>

      
    </>
  )
}

export default App
