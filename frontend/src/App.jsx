import React from 'react'
import { Routes } from 'react-router-dom'
import Start from './pages/Start'
import Userlogin from './pages/UserLogin'
import Captainlogin from './pages/CaptainLogin'
import UserSignup from './pages/UserSignup'



import CaptainSignup from './pages/CaptainSignup'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Userlogin />} />
      <Route path="/riding" element={<Riding />} />
      <Route path="/captain-riding" element={<CaptainRiding />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<Captainlogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route
        path="/home"
        element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        }
      />
      <Route
        path="/user-logout"
        element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        }
      />
      <Route
        path="/captain-home"
        element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        }
      />
    </Routes>
  );
}

export default App