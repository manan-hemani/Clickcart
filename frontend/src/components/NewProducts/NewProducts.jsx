import React, { useState, useEffect } from "react";
import "./NewProducts.css";
// import new_products from "../Assests/new_products";
import Item from "../Item/Item";

const NewProducts = ({ products }) => {
  const [new_products, setNew_products] = useState([]);

  // useEffect(() => {
  //   if (Array.isArray(products) && products.length > 0) {
  //     const filtered = products.filter((item) => item.bestseller);
  //     setNew_products(filtered.slice(0, 5));
  //   }
  // }, [products]);
  useEffect(() => {
    setNew_products(products.slice(0, 5));
  },[products]);

  return (
    <div className="new-products" id="new-arrivals">
      <h1>NEW PRODUCTS</h1>
      <hr />
      <div className="new-products-items">
        {new_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item._id}
              name={item.name}
              image={item.images[0]}
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
