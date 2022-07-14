import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="center">
          <div className="hamburger">
            <div className="span-one spun"></div>
            <div className="span-two spun"></div>
            <div className="span-three spun"></div>
          </div>
          <ul className="links">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="left">
          <div className="logo">WADHII THRIFT.</div>
        </div>
        <div className="right">
          <div className="search-container">
            <input type="text" className="search" placeholder="Search" />
            <SearchIcon style={{ color: "grey", fontsize: 16 }} />
          </div>
          <LocalMallOutlinedIcon className="cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
