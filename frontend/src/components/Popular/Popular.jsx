import React, { useState, useEffect } from "react";
import "./Popular.css";
// import data_product from "../Assests/data";
import Item from "../Item/Item";

const Popular = ({products}) => {
  const [popularProducts, setPopularProducts] = useState([]);
  
  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      const filtered = products.filter((item) => item.bestseller);
      setPopularProducts(filtered.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="popular">
      <h1>POPULAR IN MOBILES</h1>
      <hr />
      <div className="popular-items">
        {popularProducts.map((item, i) => {
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

export default Popular;
