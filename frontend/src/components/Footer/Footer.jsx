import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footer_logo from "../Assests/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" height={50} />
        <p>ClickCart</p>
      </div>
      <div className="footer-main">
        <div className="footer-main-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nisi deleniti praesentium quo accusamus asperiores facere quam
          incidunt eum, corrupti eveniet quas nulla libero deserunt laudantium?
          Autem eveniet ex recusandae.
        </div>

        <div className="footer-main-right">
          <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>
              <Link className="footer-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/contactus">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>
      <div className="footer-details">
        <hr />
        <p>Made with 💟 in INDIA by an INDIAN</p>
      </div>
    </div>
  );
};

export default Footer;
