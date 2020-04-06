import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../resources/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="header d-flex flex-wrap">
        <img src={logo} className="logo" alt="logo" />
        <div className="header-right">
          <FontAwesomeIcon icon={faShoppingCart} className="header-link" />
          <Link to="/login" className="header-link">
            Login
          </Link>
          <Link to="/signup" className="header-link signup">
            Sign up
          </Link>
          <Link to="/inventory" className="header-link">
            Add Inventory
          </Link>
          {/* <button className="btn btn-primary">Login</button>
          <button className="btn btn-danger">Sign up</button> */}
        </div>
      </header>
      <div className="banner">
        <h1>Best food waiting for your belly</h1>
        <div>
          <input
            type="text"
            className="search"
            placeholder="Search food items"
          />
          <button type="submit" className="signup">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
