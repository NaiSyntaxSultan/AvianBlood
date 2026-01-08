import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import NotFound from '../pages/not-found/NotFound'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import PredictionResult from '../pages/prediction/PredictionResult'
import Prediction from '../pages/prediction/Prediction'
import ManageUsers from '../pages/admins/ManageUsers'
import ManageData from '../pages/admins/ManageData'
import Dashboard from '../pages/admins/Dashboard'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />

      {/* Predict */}
      <Route path='/prediction' element={<Prediction />} />
      <Route path='/result' element={<PredictionResult />} />

      {/* Admins */}
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/manageusers' element={<ManageUsers />} />
      <Route path='/managedata' element={<ManageData />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter