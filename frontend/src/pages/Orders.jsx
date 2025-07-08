import React, { useContext } from "react";
import "./CSS/Orders.css";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="orders">
      <h1>My Orders</h1>
      {products.slice(1, 4).map((item, i) => (
        <>
          <div>
            <div key={i} className="orders-container">
              <div className="orders-list">
                <img src={item.images[0]} alt="orders" />
                <div className="orders-details">
                  <div className="top-row">
                    <p>{item.name}</p>
                    <p>Rs. {item.new_price}</p>
                    <p>Qantity: 1</p>
                  </div>
                  <div className="bottom-row">
                    <p>Size: 256GB</p>
                    <p className="orders-date">
                      Date: <span>25 July 2025</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="orders-status">
                <p className="orders-status-dot"></p>
                <p>Ready to ship</p>
              </div>
              <div className="orders-track">
                <button >Track Order</button>
              </div>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Orders;
