import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   </BrowserRouter>
  )
}
