import React from "react";
import "./products.css";
import { data } from "../data";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="products">
      <div className="wrap-products">
        <div className="products-title">
          Best of sale: shop our editor's picks
        </div>
        <div className="product-wrapper">
          {data.map((item) => (
            <ProductItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
