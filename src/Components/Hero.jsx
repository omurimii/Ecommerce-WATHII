import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-left"></div>
        <div className="hero-right">
          <div className="hero-title">
            <span>10,000 ITEMS,</span>
            <span>NOW AT 60% OFF</span>
          </div>
          <p className="hero-paragraph">
            The greatest collection of thrifted shoes and clothes
          </p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
