import React from 'react'
import './App.css'
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import MockTest from './pages/MockTest'


function App() {
  return (
       <div className="container">
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MockTest/>}/>
        </Routes>
      </Router>
     
       </div>
      
    
  )
}

export default App