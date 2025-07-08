import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Breadcrumbs from "../components/Breadcrumbs/breadcrumbs";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <Breadcrumbs product={products} />
      <ProductDisplay product={products} />
      <DescriptionBox />
      <RelatedProducts category={ products} />
    </div>
  );
};

export default Product;
