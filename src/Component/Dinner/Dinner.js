import React, { useState, useEffect } from "react";
import "../Breakfast/Breakfast.css";
// import fakeData from "../../resources/DummyData/fakeData";
import SingleItem from "../SingleItem/SingleItem";
import Banner from "../Banner/Banner";
import NavCategory from "../NavCategory/NavCategory";

const Dinner = () => {
  // const sixItem = fakeData.filter(sx => sx.category === "dinner").slice(0, 6);
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
        const randomData = shuffle(data);
        setItem(
          randomData.filter((me) => me.category === "dinner").slice(0, 6)
        );
      });
  }, []);

  const showAllItems = item.map((sbi) => (
    <SingleItem key={sbi.id} singleItem={sbi}></SingleItem>
  ));

  function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

  return (
    <div className="d-flex flex-column">
      <Banner></Banner>
      <NavCategory></NavCategory>
      <div className="breakfastContainer d-flex flex-wrap justify-content-around">
        {showAllItems}
      </div>
    </div>
  );
};

export default Dinner;
