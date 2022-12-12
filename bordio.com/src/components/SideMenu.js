import React from 'react'
import logo from '../assets/bordio.png'; 
import odam from "../assets/odam.png";
import { AiOutlineDown } from "react-icons/ai";
import  "./SideMenuStyle.css";


const SideMenu = () => {
  return (
    <>
    <div className='header-section'>
      <div className='header-body'>
        <div className='logo-version'>
          <img className='logo-in-bordio' src={logo} />
        </div>
        <div className='serch-section'>
          <input className='serch-body' type='text' placeholder='Serch..'/>
        </div>
        <div className='person-section'>
        <img className='logo-in-odam' src={odam} />
        <div className='odam-text'>My workspace</div>
        </div>
        <div className='favorit-section'>
     <AiOutlineDown color='white' fontSize='1.5em' />
     <div className='favorites'>Favorites</div>
</div>
        
        
        <div className='nav-side'>
          <ul>
            <a href='/'>Marceting</a>
            <a href='/'>Mobile App</a>
            <div className='favorit-section-body'>
     <AiOutlineDown color='white' fontSize='1.5em' />
     <div className='favorites'>My Projects</div>
</div>
            <a href='/'>Landing Page</a>
            <a href='/'>Wedding</a>
            <a href='/'>Mobile App</a>
            <a href='/'>House Construction</a>
          </ul>
        </div>
        
        
      </div>
    </div>
    </>
  )
}

export default SideMenu