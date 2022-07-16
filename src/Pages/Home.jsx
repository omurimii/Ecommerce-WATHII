import React, { useState } from "react";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Jeans from "../Components/Jeans";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Shoes from "../Components/Shoes";
import Menu from "../Components/Menu";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="home">
      <Announcement />
      <Navbar open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Hero />
      <Products />
      <Shoes />
      <Jeans />
      <Footer />
    </div>
  );
};

export default Home;
