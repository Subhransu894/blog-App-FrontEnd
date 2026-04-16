import { useState } from 'react'
// import './App.css'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import BlogList from './component/BlogList'
import BlogForm from './component/BlogForm'
import Register from './component/Register'
import LogIn from './component/LogIn'
import Navbar from './component/Navbar'
import { useLocation } from 'react-router-dom'

function AppContent(){
  const location = useLocation()
  const hideNav = location.pathname === "/" || location.pathname === "/login"
  return(
    <>
      {!hideNav && <Navbar/>}
        <div style={{backgroundColor:"#f6eef7",minHeight:"100vh",padding:"20px"}}>
          <Routes>
             <Route path="/" element={<Register/>}/>
             <Route path='/login' element={<LogIn/>}/>
             <Route path="/blogs" element={<BlogList/>}/>
             <Route path='/createblog' element={<BlogForm/>}/>
             <Route path='/edit/:id' element={<BlogForm/>}/>
          </Routes>
        </div>
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <AppContent/>
      </Router>
    </>
  )
}

export default App
