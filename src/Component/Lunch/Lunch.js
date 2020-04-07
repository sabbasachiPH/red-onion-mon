import React, { useState, useEffect } from "react";
import "../Breakfast/Breakfast.css";
// import fakeData from "../../resources/DummyData/fakeData";
import SingleItem from "../SingleItem/SingleItem";
import Banner from "../Banner/Banner";
import NavCategory from "../NavCategory/NavCategory";
import Marketing from "../Marketing/Marketing";
import Footer from "../Footer/Footer";

const Lunch = () => {
  // const sixItem = fakeData.filter(sx => sx.category === "lunch").slice(0, 6);
  // console.log(props);
  // console.log(sixItem);
  // const [item, setItem] = useState(sixItem);
  const [item, setItem] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:4200/showAllmenu")
    fetch("https://red-mongo.herokuapp.com/showAllmenu")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const displayOnlySix = data
          .filter((me) => me.category === "lunch")
          .slice(0, 6);
        setItem(displayOnlySix);
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

export default Lunch;
