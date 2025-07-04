import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./CSS/CartTotal.css";

const CartTotal = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  const navigate = useNavigate();
  const handleProceed = () => {
    navigate("/place-order");
  };

  const location = useLocation();
  const hidePromo = location.pathname === "/place-order";
  return (
    <div className="cart-total">
      <div className="cart-items-total">
        <h1>Cart Total </h1>
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
          {!hidePromo && <button onClick={handleProceed}>Proceed</button>}
        </div>
      </div>
      {!hidePromo && (
        <div className="cart-items-promo-code">
          <p>Have a promo code?</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
