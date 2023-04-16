import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from './components/home'
import Atable from './components/appointment'
import Ptable from './components/patient'
import Navbar from './components/navbar'
 const App=()=> {

  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route  path='/home' element={<Home/>}/>
      
      <Route exact path="/appointment" element={<Atable />} />
      <Route exact path="/patients" element={<Ptable />} />

    </Routes>
  </BrowserRouter>
  )
} 
export default  App