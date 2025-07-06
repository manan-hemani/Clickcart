import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../Assets/upload_area.svg";
import axios from "axios";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";

const AddProduct = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [old_price, setOld_price] = useState("");
  const [new_price, setNew_price] = useState("");
  const [category, setCategory] = useState("mobiles");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const allSizes = ["128GB", "256GB", "512GB", "1TB"];
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("old_price", old_price);
      formData.append("new_price", new_price);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      console.log(token);
      if (response.data.success) {
        toast.success(response.data.success);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setNew_price("");
        setOld_price("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="add-product">
        <div className="add-product-item-field">
          <p>Product Title</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="add-product-item-field">
          <p>Product Description</p>
          <textarea
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="add-product-price">
          <div className="add-product-item-field">
            <p>Price</p>
            <input
              value={old_price}
              onChange={(e) => setOld_price(e.target.value)}
              type="text "
              name="old_price"
              placeholder="Enter Price"
            />
          </div>
          <div className="add-product-item-field">
            <p>Offer Price</p>
            <input
              value={new_price}
              onChange={(e) => setNew_price(e.target.value)}
              type="text "
              name="new_price"
              placeholder="Enter Price"
            />
          </div>
        </div>
        <div className="add-product-item-field">
          <p>Product Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="add-product-selector"
          >
            <option value="mobiles">Mobile</option>
            <option value="tablets">Tablet</option>
            <option value="laptops">Laptop</option>
            <option value="audio">Audio Device</option>
          </select>
        </div>
        <div className="add-product-item-field">
          <p>Product Memory</p>
          <div className="add-product-sizes-option">
            {allSizes.map((size) => (
              <div
                key={size}
                className={`size-box ${sizes.includes(size) ? "selected" : ""}`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="add-product-item-field">
          <p>Upload Images</p>
          <label htmlFor="image1">
            <img
              src={image1 ? URL.createObjectURL(image1) : upload_area}
              alt="uploadArea"
              className="add-product-thumbnail-image"
            />
          </label>
          <input
            onChange={(e) => setImage1(e.target.files[0])}
            type="file"
            id="image1"
            hidden
          />
          <label htmlFor="image2">
            <img
              src={image2 ? URL.createObjectURL(image2) : upload_area}
              alt="uploadArea"
              className="add-product-thumbnail-image"
            />
          </label>
          <input
            onChange={(e) => setImage2(e.target.files[0])}
            type="file"
            id="image2"
            hidden
          />
          <label htmlFor="image3">
            <img
              src={image3 ? URL.createObjectURL(image3) : upload_area}
              alt="uploadArea"
              className="add-product-thumbnail-image"
            />
          </label>
          <input
            onChange={(e) => setImage3(e.target.files[0])}
            type="file"
            id="image3"
            hidden
          />
          <label htmlFor="image4">
            <img
              src={image4 ? URL.createObjectURL(image4) : upload_area}
              alt="uploadArea"
              className="add-product-thumbnail-image"
            />
          </label>
          <input
            onChange={(e) => setImage4(e.target.files[0])}
            type="file"
            id="image4"
            hidden
          />
        </div>
        <div className="add-product-bestseller">
          <input
            type="checkbox"
            id="bestseller"
            onChange={() => setBestseller((prev) => !prev)}
            checked={bestseller}
          />
          <label htmlFor="bestseller">Add to Bestseller</label>
        </div>
        <button type="submit" className="add-product-button">
          ADD
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
