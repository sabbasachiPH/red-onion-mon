import React from "react";
import "./NavCategory.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Breakfast from "../Breakfast/Breakfast";
import Launch from "../Launch/Launch";
import Dinner from "../Dinner/Dinner";
import NotFound from "../NotFound/NotFound";
import ItemDetail from "../ItemDetail/ItemDetail";

const NavCategory = () => {
  return (
    <div>
      <nav className="category nav">
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
      <Router>
        {/* <nav>
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
        </nav> */}

        <Switch>
          <Route exact path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/launch">
            <Launch></Launch>
          </Route>
          <Route exact path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route exact path="/">
            <Launch></Launch>
          </Route>
          <Route path="/breakfast/:id">
            <ItemDetail></ItemDetail>
          </Route>
          <Route path="/lunch/:id">
            <ItemDetail></ItemDetail>
          </Route>
          <Route path="/dinner/:id">
            <ItemDetail></ItemDetail>
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
