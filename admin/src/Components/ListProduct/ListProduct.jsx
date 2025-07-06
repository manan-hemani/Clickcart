import React, { useState, useEffect } from "react";
import "./ListProduct.css";
import axios from "axios";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";

const ListProduct = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.error.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="list-product">
        <h1>All Products List</h1>
        <div className="list-product-format-main">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="list-product-action">Action</b>
        </div>

        {/* Products List */}
        <div className="list-product-all-products">
          {list.map((item, index) => {
            return (
              <div key={index} className="list-product-format">
                <img
                  src={item.images[0]}
                  alt="image"
                  className="list-product-icon"
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>Rs. {item.new_price}</p>
                <p
                  onClick={() => removeProduct(item._id)}
                  className="list-product-remove"
                >
                  X
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
