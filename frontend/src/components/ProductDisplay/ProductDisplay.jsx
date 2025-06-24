import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
    return (
      <div className="product-display">
        <div className="product-display-left">
          <div className="product-display-image-list">
            <img src={product.image} alt="Pimg1" />
            <img src={product.image} alt="Pimg2" />
            <img src={product.image} alt="Pimg3" />
            <img src={product.image} alt="Pimg4" />
          </div>
          <div className="product-display-image">
            <img
              className="product-display-image-main"
              src={product.image}
              alt="PmainIMG"
            />
          </div>
        </div>
        <div className="product-display-right">
          <h1>{product.name}</h1>
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
              Rs. {product.old_price}
            </div>
            <div className="product-display-right-prices-newprice">
              Rs. {product.new_price}
            </div>
          </div>
          <div className="product-display-right-description">
            description blah blah .................
          </div>
          <div className="product-display-right-select">
            <h1>Select Memory</h1>
                    <div className="product-display-right-selection">
                        <div>128GB</div>
                        <div>256GB</div>
                        <div>512GB</div>
                        <div>1TB</div>
            </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <p className='product-display-right-category'><span>Category: </span>Mobile, Apple</p>
                <p className='product-display-right-category'><span>Tags: </span>Top Pick, Limited Stock</p>

        </div>
      </div>
    );
}

export default ProductDisplay
