import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-navbox">Description</div>
        <div className="description-box-navbox fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          An online electronics e-commerce website offers a seamless shopping
          experience for gadgets like smartphones, laptops, tablets, and audio
          devices. Customers can explore detailed specs, compare products, and
          enjoy secure payments with fast delivery. It’s a one-stop destination
          for tech enthusiasts seeking convenience, variety, and trusted
          brands—all from home.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
