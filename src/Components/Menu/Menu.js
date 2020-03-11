import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-link'>
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>

      <div className='menu-link'>
        <Link to="/portfolio">
          <span>Portfolio</span>
        </Link>
      </div>

      <div className='menu-link'>
        <Link to="/pricing">
          <span>Pricing</span>
        </Link>
      </div>

      <div className='menu-link'>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>

      <div className='menu-link'>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
