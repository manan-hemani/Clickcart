import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import add_product_icon from "../../Assets/Product_Cart.svg";
import list_product_icon from "../../Assets/Product_list_icon.svg";
import order_icon from "../../Assets/orders.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to={"/add"}
        style={{ textDecoration: "none" }}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <div className="sidebar-item">
          <img src={add_product_icon} alt="addProduct" width={40} />
          <p>Add Product</p>
        </div>
      </NavLink>
      <NavLink
        to={"/list"}
        style={{ textDecoration: "none" }}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <div className="sidebar-item">
          <img src={list_product_icon} alt="listProduct" width={40} />
          <p>List Product</p>
        </div>
      </NavLink>
      <NavLink
        to={"/orders"}
        style={{ textDecoration: "none" }}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <div className="sidebar-item">
          <img src={order_icon} alt="listProduct" width={40} />
          <p>Orders</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
