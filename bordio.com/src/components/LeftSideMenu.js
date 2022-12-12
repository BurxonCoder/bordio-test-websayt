import React from 'react'
import  "../components/LeftSideMenu.css";
import { CgMenuRight } from "react-icons/cg";
import { BsClipboardData } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { VscFileSubmodule } from "react-icons/vsc";

const LeftSideMenu = () => {
  return (
    <div className='header-tools'>
        <div className='tool'>
            Tools
        </div>
        <diuv className="nav-item">
            <ul>
                <a href='/' className='heade-sec-1'> <CgMenuRight color='grey' />Roadmap</a>
                <a href='/' className='a-head'><BsClipboardData color='#0094FF' />Schedule</a>
                <a href='/'className='heade-sec-2'><BiTask color='grey' />Tasks</a>
                <a href='/'className='heade-sec-3'><CgNotes color='grey'/>Notes</a>
                <a href='/'className='heade-sec-4'><VscFileSubmodule color='grey'/>Files</a>

            </ul>
        </diuv>
    </div>
  )
}

export default LeftSideMenu