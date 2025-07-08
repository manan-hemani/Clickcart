import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");

  useEffect(() => {
    const matchedProduct = product.find((item) => item._id === productId);
    if (matchedProduct) {
      setProductData(matchedProduct);
      setSelectedImage(matchedProduct.images[0]); // default to first image
      setSelectedMemory(matchedProduct.sizes[0]); //default to 1st memory
    }
  }, [productId, product, productData]);

  if (!productData || !productData.images || productData.images.length === 0) {
    return <div>Loading product...</div>;
  }
  // console.log(productData.images);
  const imageSet = productData.images;
  const maxImages = 4;

  // returning images if not 4 then repeating it total images 4 1 main and 3 side
  const displayedImages = [...Array(maxImages)].map(
    (_, i) => imageSet[i % imageSet.length]
  );

  // returning the alloted sizes choosed in admin panel while add product
  const sizeSet = productData.sizes;
  const maxSizes = sizeSet.length; // will display only added memory
  const memoryOptions = [...Array(maxSizes)].map(
    (_, i) => sizeSet[i % sizeSet.length]
  );

  return (
    <div className="product-display">
      <div className="product-display-left">
        {/* Thumbnail Images */}
        <div className="product-display-image-list">
          {displayedImages.map((imgUrl, i) => (
            <img
              key={`thumb-${i}`}
              src={imgUrl}
              alt={`thumb-${i + 1}`}
              className={`thumbnail ${
                selectedImage === imgUrl ? "active-thumb" : ""
              }`}
              onClick={() => setSelectedImage(imgUrl)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="product-display-image">
          <img
            className="product-display-image-main"
            src={selectedImage}
            alt="Selected"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="product-display-right">
        <h1>{productData.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-prices-oldprice">
            Rs. {productData.old_price}
          </div>
          <div className="product-display-right-prices-newprice">
            Rs. {productData.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          {productData.description}
        </div>

        {/* Memory Selection */}
        <div className="product-display-right-select">
          <h1>Select Memory</h1>
          <div className="product-display-right-selection">
            {memoryOptions.map((size, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setSelectedMemory(size)}
                  className={`memory-button ${
                    selectedMemory === size ? "selected" : ""
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="product-display-addtocart"
          onClick={() => {
            addToCart(productData._id,selectedMemory);
          }} //passing the id and selected size
        >
          Add to Cart
        </button>
        <hr />
        <div className="product-display-policy">
          <p>100% Original Product.</p>
          <p>Cash on Delivery is available.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
        <hr />
        <p className="product-display-right-category">
          <span>Category: </span>
          {productData.category},{productData.name}
        </p>
        <p className="product-display-right-category">
          <span>Tags: </span>Top Pick, Limited Stock
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
