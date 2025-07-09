import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/PlaceOrder.css";
import CartTotal from "./CartTotal";
import stripe_icon from "../components/Assests/stripe_logo.png";
import razorpay_icon from "../components/Assests/razorpay_logo.png";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();
  const {
    backendURL,
    token,
    products,
    delivery_fee,
    cartItems,
    setCartItems,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const handlePlace = () => {
    navigate("/orders");
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            console.log(itemInfo);
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      console.log(cartItems);
      console.log(orderItems);

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getTotalCartAmount() + delivery_fee,
      };

      switch (method) {
        // COD API Call
        case "cod":
          const response = await axios.post(
            backendURL + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            handlePlace();
          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="place-order">
        <div className="place-order-left">
          <h1>Delivery Information</h1>
          <div className="place-order-left-details">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email ID"
          />
          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            type="text"
            placeholder="Street Address"
          />
          <div className="place-order-left-details">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              type="text"
              placeholder="City"
            />
            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              type="text"
              placeholder="State"
            />
          </div>
          <div className="place-order-left-details">
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              type="text"
              placeholder="Country"
            />
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              type="number"
              placeholder="Zipcode"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            type="number"
            placeholder="Phone No."
          />
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
                    background:
                      method === "razorpay" ? "#00e676" : "transparent",
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
              type="submit"
              // onClick={() => {
              //   handlePlace();
              // }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
