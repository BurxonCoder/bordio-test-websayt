import React from 'react'
import "../components/NavbarTopStyle.css";
const NavbarTop = () => {
  return (
    <div className="navbar-top">
        <div className='top'>
        <div className='hr-line'>
                <hr className='line-head'></hr>
            </div>
            <ul className='ul-dead'>
                <div className='top-section-1'>New task</div>
                <div className='top-section-2'>Scheduled</div>
                <div className='top-section-3'>In progress</div>
                <div className='top-section-4'>Completed</div>


            </ul>
            <div className='hr-line'>
                <hr className='line-head'></hr>
            </div>
        </div>
        
    </div>
  )
}

export default NavbarTop