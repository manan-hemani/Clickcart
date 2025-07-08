import React from "react";
import "./RelatedProducts.css";
import { useNavigate } from "react-router-dom";
// import data_product from "../Assests/data";
import Items from "../Item/Item";

const RelatedProducts = ({ category }) => {
  const navigate = useNavigate();
  const handleproductClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product/${id}`);
  };

  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-items">
        {category.map((item, i) => {
          return (
            <>
              <div key={i} onClick={() => handleproductClick(item._id)}>
                <Items
                  key={i}
                  id={item._id}
                  name={item.name}
                  image={item.images[0]}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
