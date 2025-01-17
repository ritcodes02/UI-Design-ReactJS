import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpeg"
import { TbHome2 } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { TbTower } from "react-icons/tb";
import { SiCloudflarepages } from "react-icons/si";
import { VscGraphLine } from "react-icons/vsc";
import { TbNotes } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import Profile from '../pages/Profile';


function Navbar() {
  return (
    <div className="navbar">
      <div className="firstbench">
        <img src={logo} />
        <h2>Firstbench</h2></div>
         <div className='icon'>
          <TbHome2 />
           <h3>Dashboard</h3></div>
           <div className='icon'>
           <BsStars />
            <h3>FirstGuru</h3></div>
           <div className='icon'>
           <TbTower />
            <h3>TownHall</h3></div>
           <div className='icon'>
           <SiCloudflarepages />
            <h3>AIEvaluation</h3></div>
           <div className='icon'>
           <VscGraphLine />
            <h3 >Performance</h3></div>
           <div className='icon'>
           <TbNotes /></div>
           <Link className="link" to="/">Mock Test</Link>
           
           <div className='bell'>
            <BsBell /></div>
           
           <div><Profile/></div>
          

    </div>
  )
}

export default Navbar






