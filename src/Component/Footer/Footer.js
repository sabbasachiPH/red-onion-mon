import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container d-flex flex-column justify-content-between">
      <div className="upper d-flex">
        <div className="upper-left d-flex flex-column justify-content-between">
          <img
            src="https://i.ibb.co/fYVgVKM/logo.png"
            className="footer-icon"
            alt="logo"
            border="0"
          />
        </div>
        <div className="upper-right d-flex align-items-stretch justify-content-center">
          <ul>
            <li>About Online Food</li>
            <li>Read our Blog</li>
            <li>Sign up to deliver</li>
            <li>Add your restaurant</li>
          </ul>
          <ul>
            <li>Get Help</li>
            <li>Read FAQs</li>
            <li>View all cities</li>
            <li>Restaurants near me</li>
          </ul>
        </div>
      </div>
      <div className="bottom d-flex justify-content-between align-items-center ">
        Copyright &copy; 2020 Online food
        <div className="bottom-right">
          <ul className="d-flex">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
