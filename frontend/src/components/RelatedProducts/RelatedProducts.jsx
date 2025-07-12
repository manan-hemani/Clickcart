import React from "react";
import "./RelatedProducts.css";
import { useNavigate, useParams } from "react-router-dom";
// import data_product from "../Assests/data";
import Items from "../Item/Item";

const RelatedProducts = ({ product }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // from all products array taking clicked product id
  const product_item = product.find((item) => item._id === productId);
  // using that product details finding its category
  const relatedCategory = product_item?.category;
  // filtering products based on the category
  const filteredProducts = product
    .filter(
      (item) => item.category === relatedCategory && item._id !== productId
    )
    .slice(0, 4); // displaying only 4 products

  const handleproductClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product/${id}`);
  };
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-items">
        {filteredProducts.map((item, i) => {
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
