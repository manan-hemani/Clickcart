import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./CSS/CartTotal.css";

const CartTotal = () => {
  const {
    getTotalCartAmount,
    delivery_fee,
    promoCode,
    applyPromo,
    totalAmount,
    isPromoApplied,
    promoDiscountValue,
  } = useContext(ShopContext);

  const [enteredCode, setEnteredCode] = useState("");
  const promoValue = 1000;
  const navigate = useNavigate();
  const location = useLocation();
  const hidePromo = location.pathname === "/place-order";

  const handlePromoSubmit = () => {
    const code = enteredCode.trim().toUpperCase();
    if (code === promoCode) {
      applyPromo(code, promoValue);
      toast.success("Promo Code Applied");
    } else {
      toast.error("Wrong Promo Code!");
    }
    setEnteredCode("");
  };

  const handleProceed = () => {
    navigate("/place-order");
  };

  return (
    <div className="cart-total">
      <div className="cart-items-total">
        <h1>Cart Total </h1>
        <div>
          <div className="cart-items-total-item">
            <p>SubTotal:</p>
            <p>Rs. {getTotalCartAmount()}.00</p>
          </div>
          <hr />
          <div className="cart-items-total-item">
            <p>Shipping Fees:</p>
            <p>Rs. {delivery_fee}.00</p>
          </div>
          <hr />
          {isPromoApplied && (
            <div className="cart-items-total-item">
              <p>Promo Code:</p>
              <p>
                <span>-</span>Rs. {promoDiscountValue}.00
              </p>
            </div>
          )}
          <div className="cart-items-total-item">
            <h3>Total</h3>
            <h3>Rs. {totalAmount()}.00</h3>
          </div>

          {!hidePromo && <button onClick={handleProceed}>Proceed</button>}
        </div>
      </div>
      {!hidePromo && (
        <div className="cart-items-promo-code">
          <p>Have a promo code?</p>
          <div className="cart-items-promobox">
            <input
              type="text"
              placeholder="Promo Code"
              value={enteredCode}
              onChange={(e) => setEnteredCode(e.target.value)}
            />
            <button onClick={handlePromoSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
