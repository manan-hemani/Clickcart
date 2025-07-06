import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
import Orders from "../../Components/Orders/Orders";
import Login from "../../Components/Login/Login";

const admin = ({ token }) => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/add" element={<AddProduct token={token} />} />
        <Route path="/list" element={<ListProduct token={token} />} />
        <Route path="/orders" element={<Orders token={token} />} />
      </Routes>
    </div>
  );
};

export default admin;
