import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assests/remove.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart-items-format cart-items-format-main">
                <img
                  className="cart-items-product-icon"
                  src={e.image}
                  alt="productImage"
                />
                <p>{e.name}</p>
                <p>Rs. {e.new_price}</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>Rs. {e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart-items-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="removeIcon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-items-total-item">
              <p>SubTotal:</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fees:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>Rs. {getTotalCartAmount()}</h3>
            </div>
            <button>Proceed</button>
          </div>
        </div>
        <div className="cart-items-promo-code">
          <p>Have a promo code?</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
