import React, { useState, useEffect } from "react";
import "../Breakfast/Breakfast.css";
import fakeData from "../../resources/DummyData/fakeData";
import SingleItem from "../SingleItem/SingleItem";

const Dinner = () => {
  const sixItem = fakeData.filter(sx => sx.category === "dinner").slice(0, 6);
  // console.log(props);
  // console.log(sixItem);
  const [item, setItem] = useState(sixItem);

  const showAllItems = sixItem.map(sbi => (
    <SingleItem key={sbi.id} singleItem={sbi}></SingleItem>
  ));
  return (
    <div className="breakfastContainer d-flex flex-wrap justify-content-around">
      {showAllItems}
    </div>
  );
};

export default Dinner;
