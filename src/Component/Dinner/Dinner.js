import React, { useState, useEffect } from "react";
import "../Breakfast/Breakfast.css";
// import fakeData from "../../resources/DummyData/fakeData";
import SingleItem from "../SingleItem/SingleItem";

const Dinner = () => {
  // const sixItem = fakeData.filter(sx => sx.category === "dinner").slice(0, 6);
  // console.log(props);
  // console.log(sixItem);
  // const [item, setItem] = useState(sixItem);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4200/showAllmenu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data.filter((me) => me.category === "dinner").slice(0, 6));
      });
  }, []);

  const showAllItems = item.map((sbi) => (
    <SingleItem key={sbi.id} singleItem={sbi}></SingleItem>
  ));
  return (
    <div className="breakfastContainer d-flex flex-wrap justify-content-around">
      {showAllItems}
    </div>
  );
};

export default Dinner;
