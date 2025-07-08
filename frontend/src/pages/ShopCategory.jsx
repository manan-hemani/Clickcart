import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";

const ShopCategory = ({ category, banner }) => {
  const { products } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("default");
  const showProduct = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
  const count = showProduct.length;

  const sortProduct = [...showProduct].sort((a, b) => {
    switch (sortOption) {
      case "low-high":
        return a.new_price - b.new_price;
      case "high-low":
        return b.new_price - a.new_price;
      default:
        return 0;
    }
  });

  return (
    <div className="shop-category">
      <img
        className="shop-category-banner"
        src={banner}
        alt="banner"
        height={400}
      />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing {count}</span> Products
        </p>
        <div className="shop-category-sort">
          <select
            name="sorted"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value, e.target.blur())}
          >
            <option value="default">Sort By</option>
            <option value="low-high">Price: Low-to-High</option>
            <option value="high-low">Price: High-to-Low</option>
          </select>
        </div>
      </div>
      <div className="shop-category-products">
        {sortProduct.map((item, i) => {
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
      <div className="shop-category-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
