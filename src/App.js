import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import NavCategory from "./Component/NavCategory/NavCategory";
import Breakfast from "./Component/Breakfast/Breakfast";
import Launch from "./Component/Launch/Launch";
import Dinner from "./Component/Dinner/Dinner";
import NotFound from "./Component/NotFound/NotFound";
import ItemDetail from "./Component/ItemDetail/ItemDetail";
import Login from "./Component/Login/Login";
import Inventory from "./Component/Inventory/Inventory";

function App() {
  return (
    <div className="container d-flex flex-column">
      <Router>
        <Header></Header>
        <NavCategory></NavCategory>


        
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
