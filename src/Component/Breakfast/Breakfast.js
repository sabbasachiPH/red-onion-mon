import React, { useState } from "react";
import "./Breakfast.css";
import fakeData from "../../resources/DummyData/fakeData";
import SingleBreakfastItem from "../SingleBreakfastItem/SingleBreakfastItem";

const Breakfast = props => {
  const sixItem = fakeData
    .filter(sx => sx.category === "breakfast")
    .slice(0, 6);
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

export default Breakfast;