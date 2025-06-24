import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart from "../Assests/Cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} =useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" height={40} />
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p>ClickCart</p>
        </Link>
      </div>
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mobiles");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/mobiles"
          >
            Mobiles
          </Link>
          {menu === "mobiles" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("tablets");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/tablets"
          >
            Tablets
          </Link>
          {menu === "tablets" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("laptops");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/laptops"
          >
            Laptops
          </Link>
          {menu === "laptops" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("audio");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/audio">
            Audio
          </Link>
          {menu === "audio" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navbar-login-cart">
        <Link style={{ textDecoration: "none", color: "black" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
          <img src={cart} alt="cart" height={36} />
        </Link>
        <div className="navbar-cart-counter">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
