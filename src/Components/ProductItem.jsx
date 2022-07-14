import React from "react";
import "./productItem.css";

const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <div className="product-item-wrapper">
        <img src={item.img} alt="" className="image" />
        <div className="product-info">
          <h3 className="item-time">{item.title}</h3>
          <h5 className="item-price"> {item.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
