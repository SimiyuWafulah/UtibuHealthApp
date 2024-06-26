import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Header from './components/Header'
import Home from './pages/Home'
import Download from './pages/Download'
import DashBoard from './pages/DashBoard'

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/download" element={<Download />} />
      <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
   </BrowserRouter>
  )
}
