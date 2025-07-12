import React from "react";
import "./Navbar.css";
import navLogo from "../../Assets/admin_logo.png";

const navbar = ({ setToken }) => {
  return (
    <div className="navbar">
      <img src={navLogo} alt="logo" className="navbar-logo" />
      <button
        onClick={() => {
          setToken("");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default navbar;
