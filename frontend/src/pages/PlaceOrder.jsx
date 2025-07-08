import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/PlaceOrder.css";
import CartTotal from "./CartTotal";
import stripe_icon from "../components/Assests/stripe_logo.png";
import razorpay_icon from "../components/Assests/razorpay_logo.png";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();
  const handlePlace = () => {
    navigate("/orders");
  };

  return (
    <div className="place-order">
      <div className="place-order-left">
        <h1>Delivery Information</h1>
        <div className="place-order-left-details">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email ID" />
        <input type="text" placeholder="Street Address" />
        <div className="place-order-left-details">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="place-order-left-details">
          <input type="text" placeholder="Country" />
          <input type="number" placeholder="Zipcode" />
        </div>
        <input type="number" placeholder="Phone No." />
      </div>
      <div className="place-order-right">
        <CartTotal />
        <div className="place-order-right-payments">
          <h2>PAYMENT METHOD</h2>
          <div className="place-order-right-payment">
            <div
              onClick={() => setMethod("stripe")}
              className="place-order-right-payment-option"
            >
              <p
                style={{
                  background: method === "stripe" ? "#00e676" : "transparent",
                  height: "10px",
                  width: "10px",
                }}
              >
                {" "}
              </p>
              <img src={stripe_icon} alt="stripe" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="place-order-right-payment-option"
            >
              <p
                style={{
                  background: method === "razorpay" ? "#00e676" : "transparent",
                  height: "10px",
                  width: "10px",
                }}
              ></p>
              <img src={razorpay_icon} alt="razorpay" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="place-order-right-payment-option"
            >
              <p
                style={{
                  background: method === "cod" ? "#00e676" : "transparent",
                  height: "10px",
                  width: "10px",
                }}
              ></p>
              <h3>Cash On Delivery</h3>
            </div>
          </div>
          <button
            onClick={() => {
              handlePlace();
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
