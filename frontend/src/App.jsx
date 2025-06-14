import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<UserLogin/>}></Route>
        <Route path='/signup' element={<UserSignUp/>}></Route>
        <Route path='/captain-login' element={<CaptainLogin/>}></Route>
        <Route path='/captain-signup' element={<CaptainSignup/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
