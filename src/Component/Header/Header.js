import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../resources/logo2.png";
import { Link } from "react-router-dom";
import { useAuth } from "../Login/useAuth";

const Header = () => {
  const auth = useAuth();
  console.log(auth);

  return (
    <div className="headerContainer d-flex">
      <Link to="/">
        <div className="divLeft d-flex ">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </Link>
      <div className="divRight d-flex justify-content-end align-items-center ">
        <FontAwesomeIcon icon={faShoppingCart} className="header-link" />{" "}
        {auth.user ? (
          <div>
            <img
              src={auth.user.photo}
              className="profilepic"
              alt="profileUser"
            />
            <Link to="/" className="header-link signup" onClick={auth.signOut}>
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" className="header-link">
              Log In
            </Link>
            <Link
              to="/login"
              className="header-link signup"
              onClick={auth.signOut}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
    // <div className="container">
    //   <header className="header d-flex flex-1 flex-wrap">
    //     <div className="header-left">
    //       <img src={logo} className="logo" alt="logo" />
    //     </div>
    //     <div className="d-flex flex-10 header-right">
    //       <FontAwesomeIcon icon={faShoppingCart} className="header-link" />{" "}
    //       {auth.user ? (
    //         <div className="d-flex align-items-center">
    //           <FontAwesomeIcon icon={faShoppingCart} className="header-link" />{" "}
    //           <img
    //             src={auth.user.photo}
    //             className="profilepic"
    //
    //           />
    //           {auth.user.name}
    //           <Link className="header-link signup" onClick={auth.signOut}>
    //             Sign Out
    //           </Link>
    //         </div>
    //       ) : (
    //         <Link
    //           to="/"
    //           className="header-link"
    //           onClick={auth.signInWithGoogle}
    //         >
    //           Login
    //         </Link>
    //       )}
    //       {
    //         auth.user ? (
    //           ""
    //         ) : (
    //           <Link to="/login" className="header-link signup">
    //             Sign up
    //           </Link>
    //         ) /*}
    //       {/* <Link to="/inventory" className="header-link">
    //         Add Inventory
    //       </Link> }
    //       {/* <button className="btn btn-primary">Login</button>
    //       <button className="btn btn-danger">Sign up</button> */
    //       }
    //     </div>
    //   </header>
    //
    // </div>
  );
};

export default Header;
