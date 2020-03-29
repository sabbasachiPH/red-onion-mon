import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import NavCategory from "./Component/NavCategory/NavCategory";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <NavCategory></NavCategory>
    </div>
  );
}

export default App;
