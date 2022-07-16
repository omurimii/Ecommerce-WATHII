import React from "react";
import "./menu.css";

const Menu = ({ open, setOpen }) => {
  return (
    <div className={"menu " + (open && "active")}>
      <ul className="menu-items">
        <li>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#Shop" onClick={() => setOpen(false)}>
            Shop
          </a>
        </li>
        <li>
          <a href="#About" onClick={() => setOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="Contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
