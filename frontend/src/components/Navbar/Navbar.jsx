import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart from "../Assests/Cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../Assests/nav_dropdown.png";
import my_order from "../Assests/my_order.png";
import login_icon from "../Assests/login.png";
import logout_icon from "../Assests/logout.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems, token } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("navbar-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" height={50} />
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p>ClickCart</p>
        </Link>
      </div>
      <img
        className="navbar-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="navToggle"
      />
      <ul ref={menuRef} className="navbar-menu">
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
        {localStorage.getItem("token") ? (
          <img
            src={logout_icon}
            alt="logout"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.replace("/");
              toast.success("Logged Out Successfully");
            }}
          />
        ) : (
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            <img src={login_icon} alt="login" />
          </Link>
        )}
        {token ? (
          <Link style={{ textDecoration: "none", color: "black" }} to="/orders">
            <img src={my_order} alt="orderHistory" />
          </Link>
        ) : (
          ""
        )}
        <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
          <img src={cart} alt="cart" height={36} />
        </Link>
        <div className="navbar-cart-counter">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
