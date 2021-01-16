import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Bimetriks Logo White.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
