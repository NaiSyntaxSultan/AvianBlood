import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import NotFound from '../pages/not-found/NotFound'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter