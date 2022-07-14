import React from "react";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Jeans from "../Components/Jeans";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Shoes from "../Components/Shoes";

const Home = () => {
  return (
    <div className="home">
      <Announcement />
      <Navbar />
      <Hero />
      <Products />
      <Shoes />
      <Jeans />
      <Footer />
    </div>
  );
};

export default Home;
