/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import "./CSS/Orders.css";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Orders = () => {
  const { backendURL, token } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendURL + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrderItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrderItem.push(item);
          });
        });
        setOrderData(allOrderItem.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="orders">
      <h1>My Orders</h1>
      {orderData.map((item, i) => (
        <>
          <div>
            <div key={i} className="orders-container">
              <div className="orders-list">
                <img src={item.images[0]} alt="orders" />
                <div className="orders-details">
                  <div className="order-first-row">
                    <p>{item.name}</p>
                  </div>
                  <div className="order-second-row">
                    <p>Rs. {item.new_price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="order-third-row">
                    <p>Size: {item.size}</p>
                    <p className="order-date">
                      Date: <span>{new Date(item.date).toDateString()}</span>
                    </p>
                    <p className="order-payment">Payment: {item.paymentMethod}</p>
                  </div>
                </div>
              </div>
              <div className="orders-status">
                <p className="orders-status-dot"></p>
                <p>{item.status}</p>
              </div>
              <div className="orders-track">
                <button onClick={loadOrderData}> Track Order</button>
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
