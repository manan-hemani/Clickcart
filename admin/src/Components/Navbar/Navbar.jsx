import React from 'react'
import './Navbar.css';
import navLogo from "../../Assets/nav-logo-temp.svg";
import navProfile from "../../Assets/nav-profile-temp.svg"

const navbar = () => {
  return (
    <div className='navbar'>
      <img src={navLogo} alt="logo" className="navbar-logo" />
      <img src={navProfile} alt="profile" className="navbar-profile" />
    </div>
  )
}

export default navbar
