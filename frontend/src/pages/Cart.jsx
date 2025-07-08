import React, { useState, useEffect, useContext } from "react";
import CartItem from "../components/CartItem/CartItem";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const { cartItems, products } = useContext(ShopContext);

  useEffect(
    () => {
      if (products.length > 0) {
        const tempData = [];
        for (const items in cartItems) {
          for (const item in cartItems[items]) {
            if (cartItems[items][item] > 0) {
              tempData.push({
                _id: items,
                size: item,
                quantity: cartItems[items][item],
              });
            }
          }
        }
        setCartData(tempData);
      }
    },
    [cartItems,products]
  );
  console.log(cartData);
  return (
    <div className="cart">
      <CartItem cartData={cartData} />
    </div>
  );
};

export default Cart;
