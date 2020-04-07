import React, { useState } from "react";
import "./Breakfast.css";
// import fakeData from "../../resources/DummyData/fakeData";
import SingleItem from "../SingleItem/SingleItem";
import { useEffect } from "react";
import Banner from "../Banner/Banner";
import NavCategory from "../NavCategory/NavCategory";
import Marketing from "../Marketing/Marketing";
import Footer from "../Footer/Footer";

const Breakfast = (props) => {
  // const sixItem = fakeData
  //   .filter((sx) => sx.category === "breakfast")
  //   .slice(0, 6);
  // console.log(props);
  // console.log(sixItem);
  // const [item, setItem] = useState(sixItem);
  const [item, setItem] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:4200/showAllmenu")
    fetch("https://red-mongo.herokuapp.com/showAllmenu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data.filter((me) => me.category === "breakfast").slice(0, 6));
      });
  }, []);

  const showAllItems = item.map((sbi) => (
    <SingleItem key={sbi.id} singleItem={sbi}></SingleItem>
  ));

  return (
    <div className="d-flex flex-column">
      <Banner></Banner>
      <NavCategory></NavCategory>
      <div className="breakfastContainer d-flex flex-wrap justify-content-around">
        {showAllItems}
      </div>
      <Marketing></Marketing>
      <Footer></Footer>
    </div>
  );
};

export default Breakfast;
