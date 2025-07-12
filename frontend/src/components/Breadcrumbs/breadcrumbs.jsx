import React from "react";
import "./Breadcrumbs.css";
import arrow_icon from "../Assests/right_arrow.png";
import { useParams } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { productId } = useParams();
  const { product } = props;
  const product_item = product.find((item) => item._id === productId);
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="arrow" /> SHOP
      <img src={arrow_icon} alt="arrow" /> {product_item.category}
      <img src={arrow_icon} alt="arrow" /> {product_item.name}
    </div>
  );
};

export default Breadcrumbs;
