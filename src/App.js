import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import NotFound from "./Component/NotFound/NotFound";
import ItemDetail from "./Component/ItemDetail/ItemDetail";
import Login from "./Component/Login/Login";
import Inventory from "./Component/Inventory/Inventory";
import { AuthContextProvider } from "./Component/Login/useAuth";
import OrderReview from "./Component/OrderReview/OrderReview";
import DisplayAll from "./Component/DisplayAll/DisplayAll";
import Shipment from "./Component/Shipment/Shipment";

function App() {
  return (
    <div className="container d-flex flex-column">
      <AuthContextProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <DisplayAll></DisplayAll>
            </Route>
            <Route path="/allMenu/:id">
              <ItemDetail></ItemDetail>
            </Route>
            {/* <Route path="/breakfast/:id">
              <ItemDetail></ItemDetail>
            </Route>
            <Route path="/lunch/:id">
              <ItemDetail></ItemDetail>
            </Route>
            <Route path="/dinner/:id">
              <ItemDetail></ItemDetail>
            </Route> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/shipment">
              <Shipment></Shipment>
            </Route>
            <Route path="/orderReview">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
