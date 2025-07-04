import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footer_logo from "../Assests/logo.png";
import instagram_icon from "../Assests/instagram.png";
import whatsapp_icon from "../Assests/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" height={50} />
        <p>ClickCart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <Link style={{ textDecoration: "none", color: "black" }} to="/about">
          About
        </Link>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram" height={40} width={40} />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="whatsapp" height={40} width={40} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
