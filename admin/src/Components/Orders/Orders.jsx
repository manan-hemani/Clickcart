import React from "react";
import "./Orders.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";
import parcel_icon from "../../Assets/parcel.png";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      console.log(response.data);
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="orders">
      <h1>Orders Page</h1>
      <div className="orders-container">
        {orders.map((order, index) => (
          <div key={index} className="orders-format">
            <div className="orders-format-image">
              <img className="orders-parcel-image"src={parcel_icon} alt="parcels"  />
              <div className="orders-format-details">
                <h3>Order Details</h3>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <>
                        <p key={index}>
                          {item.name} x {item.quantity}
                        </p>
                        <p>{item.size}</p>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <p key={index}>
                          {item.name} x {item.quantity}
                        </p>
                        <p>{item.size}</p>
                      </>
                    );
                  }
                })}
              </div>
              <div className="orders-user-details">
                <h3>Client Details</h3>
                <p>{order.address.firstName + " " + order.address.lastName}</p>
                <div>
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p>{order.address.phone}</p>
              </div>
            </div>
            <div className="orders-details">
              <h3>Client Order Details</h3>
              <p>Items : {order.items.length}</p>
              <p>Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? "Done" : "Pending"}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div className="orders-payment-status">
              <div className="orders-total-payment">
                <h3>Total Payment</h3>
                <div>
                  <p>Rs. {order.amount}.00</p>
                </div>
              </div>
              <div className="orders-status">
                <h3>Order Status</h3>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
