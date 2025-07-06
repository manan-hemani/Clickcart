import React from 'react'
import './Navbar.css';
import navLogo from "../../Assets/nav-logo.svg";

const navbar = ({setToken}) => {
  return (
    <div className='navbar'>
      <img src={navLogo} alt="logo" className="navbar-logo" />
      <button onClick={()=>{setToken("")}}>Logout</button>
    </div>
  )
}

export default navbar
