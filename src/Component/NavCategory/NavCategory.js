import React from "react";
import "./NavCategory.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Breakfast from "../Breakfast/Breakfast";
import Launch from "../Launch/Launch";
import Dinner from "../Dinner/Dinner";
import NotFound from "../NotFound/NotFound";

const NavCategory = () => {
  return (
    <div>
      <nav className="category">
        <a className="linkCategory" href="/breakfast">
          Breakfast
        </a>
        <a className="linkCategory" href="/launch">
          Launch
        </a>
        <a className="linkCategory" href="/dinner">
          Dinner
        </a>
      </nav>
      {/*<Nav> 
          <ul className="category">
            <li>
              <Link className="linkCategory" to="/breakfast">
                Breakfast
              </Link>
            </li>
            <li>
              <Link className="linkCategory" exact to="/launch">
                Launch
              </Link>
            </li>
            <li>
              <Link className="linkCategory" to="/dinner">
                Dinner
              </Link>
            </li>
          </ul> 
          </Nav>*/}

      <Router>
        <Switch>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/launch">
            <Launch></Launch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route exact path="/">
            <Launch></Launch>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavCategory;
