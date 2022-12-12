import React from 'react';
import  "../components/TopBarStyle.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
    
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
   
  },
btn:{
  color:'white',
  background:'blue'
}
}));

export default function TopBar({ setOpen }) {
  const classes = useStyle();
  return (
    
    <div className={classes.root}>
    <div className='heder-head'>
  <button type='button' className='btn-head'> + Add New</button>
  <div class="dropdown">
    <button class="dropbtn">Kanban
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#"> Board view</a>
      <a href="#">Table view</a>
      <a href="#">Kanban</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Filter
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#"> Board view</a>
      <a href="#">Table view</a>
      <a href="#">Kanban</a>
    </div>
  </div>
  </div>
  </div>
    
  );
}
