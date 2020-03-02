import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>

      <div>
        <Link to="/portfolio">
          <span>Portfolio</span>
        </Link>
      </div>

      <div>
        <Link to="/pricing">
          <span>Pricing</span>
        </Link>
      </div>

      <div>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>

      <div>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
