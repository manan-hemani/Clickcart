import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
// import all_product from "../components/Assests/all_product";

export const ShopContext = createContext(null);

const delivery_fee = 100;

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select the Memory Size");
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    console.log(cartItems);
    if (token) {
      try {
        await axios.post(
          backendURL + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalItem += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalItem;
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendURL + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendURL + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list");
      console.log(response);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.new_price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setToken, token]);

  const contextValue = {
    products,
    delivery_fee,
    cartItems,
    setCartItems,
    getUserCart,
    addToCart,
    updateQuantity,
    getTotalCartItems,
    getTotalCartAmount,
    backendURL,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
