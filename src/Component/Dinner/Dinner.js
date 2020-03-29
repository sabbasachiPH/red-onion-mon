import React, { useState, useEffect } from "react";
import "../Breakfast/Breakfast.css";
import fakeData from "../../resources/DummyData/fakeData";
import SingleBreakfastItem from "../SingleBreakfastItem/SingleBreakfastItem";

const Dinner = () => {
  const sixItem = fakeData.filter(sx => sx.category === "dinner").slice(0, 6);
  // console.log(props);
  // console.log(sixItem);
  const [item, setItem] = useState(sixItem);

  const showAllBreafastItems = sixItem.map(sbi => (
    <SingleBreakfastItem
      key={sbi.id}
      singleBreakfastItem={sbi}
    ></SingleBreakfastItem>
  ));
  return (
    <div className="breakfastContainer">
      {showAllBreafastItems}
    </div>
  );
};

export default Dinner;
