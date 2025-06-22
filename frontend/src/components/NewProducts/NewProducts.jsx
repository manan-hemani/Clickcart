import React from "react";
import "./NewProducts.css";
import new_products from "../Assests/new_products";
import Item from "../Item/Item";

const NewProducts = () => {
  return (
    <div className="new-products">
      <h1>NEW PRODUCTS</h1>
      <hr />
      <div className="new-products-items">
        {new_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewProducts;
