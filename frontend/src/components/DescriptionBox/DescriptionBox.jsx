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
              <p>find online para related to ecommerce selling online electronics</p>
              <p>some more para.. related to products</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
