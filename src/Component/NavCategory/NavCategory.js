import React from "react";
import { Link } from "react-router-dom";
import "./NavCategory.css";

const NavCategory = () => {
  const handleActiveClass = (e) => {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    e.target.className += " active";
  };
  // {
  //   const header = document.getElementById("myDIV");
  //   const btns = header.getElementsByClassName("linkCategory");
  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click", function () {
  //       const current = document.getElementsByClassName("active");
  //       current[0].className = current[0].className.replace("active", "");
  //       this.className += " active";
  //     });
  //   }
  // };
  return (
    <nav className="category" id="myDIV">
      <Link className="linkCategory active" to="/" onClick={handleActiveClass}>
        Breakfast
      </Link>{" "}
      <Link className="linkCategory" to="/" onClick={handleActiveClass}>
        Lunch
      </Link>{" "}
      <Link className="linkCategory" to="/" onClick={handleActiveClass}>
        Dinner
      </Link>
    </nav>
  );
};

export default NavCategory;
