import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <nav className="category">
        <a href="/breakfast">Breakfast</a>
        <a href="/launch">Launch</a>
        <a href="/dinner">Dinner</a>
      </nav>
    </div>
  );
}

export default App;
