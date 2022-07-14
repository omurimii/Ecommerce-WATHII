import React from "react";
import "./shoes.css";

const Shoes = () => {
  return (
    <div className="shoes">
      <div className="shoes-wrapper">
        <div className="left-shoe">
          <div className="shoe-title">
            <h2>SHOP THE WORLD'S TRENDING SHOES</h2>
          </div>
          <p className="shoe-paragraph">
            For the best collection of latest designer shoes from allover the
            world at convenient prices
          </p>
          <button className="shoe-btn">Shop Now</button>
        </div>
        <div className="right-shoe"></div>
      </div>
    </div>
  );
};

export default Shoes;
