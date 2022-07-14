import React from "react";
import { jeans } from "../data";
import "./jeans.css";
import ProductItem from "./ProductItem";

const Jeans = () => {
  return (
    <div className="jeans">
      <div className="jeans-wrapper">
        <div className="jeans-title">Discover: new-season Jeans</div>
        <div className="jeans-items">
          {jeans.map((item) => (
            <ProductItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jeans;
