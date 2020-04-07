import React from "react";
import { Link } from "react-router-dom";
import Auth from "./useAuth";
import "../Login/Login.css";
import NavCategory from "../NavCategory/NavCategory";

const Login = () => {
  const auth = Auth();
  console.log(auth);
  return (
    <header className="headerStyle">
      {auth.user ? (
        <div>
          <h3 className="text-success">
            Welcome Mr. {auth.user.name} to Red Onion ...
          </h3>
          <p>Please Select Your Category</p>
          <NavCategory></NavCategory>
          <Link to="/" className="btn btn-success" onClick={auth.signOut}>
            Sign Out
          </Link>
        </div>
      ) : (
        <div className="form-container">
          <img
            src="https://i.ibb.co/PTQzLwv/logo2.png"
            alt="logo2"
            border="0"
          />
          <form action="">
            <input type="text" className="form-control" placeholder="Name" />
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <br />
            <input
              type="password"
              className="form-control "
              placeholder="Confirm Password"
            />
            <br />
            <button type="submit" className="btnSignIn">
              Sign Up
            </button>
          </form>
          <p style={{ color: "#f5072a" }}>Already have an account ?</p>
          <h2>Or</h2>
          <Link
            to="/orderReview"
            className="btn btn-primary"
            onClick={auth.signInWithGoogle}
          >
            Login with your Google account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Login;
