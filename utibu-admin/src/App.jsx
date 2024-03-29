import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Header from './components/Header'
import Home from './pages/Home'
import Download from './pages/Download'

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/download" element={<Download />} />
    </Routes>
   </BrowserRouter>
  )
}
