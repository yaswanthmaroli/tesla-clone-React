import React from 'react'
import Logo from './images/logo.svg'
import '../styles/Header.css'
import {AiOutlineMenu } from "react-icons/ai";
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
 

const Header = () => {

  const [openNav,setOpenNav]= useState(false)

  return (
    <div className='header-container'>

       
       <a><img className='header-logo' src={Logo}></img> </a>
       
     
        
      <div className="menu">
        <a href="#">Model X</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      
      </div>


       <div className="right-menu">
       <a href="#">shop</a>
       <a href="#">Account</a>
       <a href="#">Menu</a>

        <AiOutlineMenu onClick={()=>setOpenNav(true)} className='menu-icon'/>
       </div>
       
       <div className={`burgernav ${openNav ? "active" :""}`}>
        <div className='close-menu'> 
        <AiOutlineClose onClick={()=>setOpenNav(!openNav)} />
        </div>

       
        <li> <a href="#">Model X</a></li>
        <li> <a href="#">Model 3</a></li>
        <li> <a href="#">Model Y</a></li>
        <li> <a href="#">Solar Roof</a></li>
        <li> <a href="#">Solar Panel</a></li>
       
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">used Inventory</a></li>
        <li><a href="#">Truck in</a></li>
        <li><a href="#">Road Master</a></li>
        <li><a href="#">semi</a></li>
        <li><a href="#">charging</a></li>
        
       </div>
      

      
    </div>
  )
}

export default Header
