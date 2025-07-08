import React, { useContext } from "react";
import Main from "../components/Main/Main";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewProducts from "../components/NewProducts/NewProducts";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import { ShopContext } from "../context/ShopContext";

const Shop = () => {
  const { products } = useContext(ShopContext);
  return (
    <div>
      <Main />
      <Popular products={products} />
      <Offers />
      <NewProducts products={products} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
