import React from "react";
import "./Breadcrumbs.css";
import arrow_icon from "../Assests/right_arrow.png";

const breadcrumbs = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="arrow" /> SHOP
      <img src={arrow_icon} alt="arrow" /> {product.category}
      <img src={arrow_icon} alt="arrow" /> {product.name}
      {/* <img src={arrow_icon} alt="arrow" /> */}
    </div>
  );
};

export default breadcrumbs;
