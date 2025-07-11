import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assests/remove.png";
import CartTotal from "../../pages/CartTotal";

const CartItem = ({ cartData }) => {
  const { products, updateQuantity } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Memory</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartData.map(({ _id, size, quantity }) => {
        const fullProduct = products.find((p) => p._id === _id);
        console.log(fullProduct);
        if (!fullProduct) {
          return null;
        } else {
          return (
            <>
              <div>
                <div className="cart-items-format cart-items-format-main">
                  <img
                    className="cart-items-product-icon"
                    src={fullProduct.images[0]}
                    alt="productImage"
                  />
                  <p>{fullProduct.name}</p>
                  <p>{size}</p>
                  <p>Rs. {fullProduct.new_price}</p>
                  <input
                    type="number"
                    className="cart-items-quantity"
                    min={1}
                    defaultValue={quantity}
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(_id, size, Number(e.target.value))
                    }
                  />
                  <img
                    className="cart-items-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      updateQuantity(_id, size, 0);
                    }}
                    alt="removeIcon"
                  />
                </div>
              </div>
              <hr />
            </>
          );
        }
      })}

      <div className="cart-items-down">
        <CartTotal />
      </div>
    </div>
  );
};

export default CartItem;
