import React from "react";
import { Link } from "react-router-dom";
import "./NavCategory.css";

const NavCategory = () => {
  return (
    <div>
      <nav className="category">
        <Link className="linkCategory" to="/breakfast">
          Breakfast
        </Link>{" "}
        <Link className="linkCategory" to="/launch">
          Launch
        </Link>{" "}
        <Link className="linkCategory" to="/dinner">
          Dinner
        </Link>
      </nav>
    </div>
  );
};

export default NavCategory;
