import React, { useState } from "react";
import "./Breakfast.css";
import fakeData from "../../resources/DummyData/fakeData";
import SingleItem from "../SingleItem/SingleItem";

const Breakfast = props => {
  const sixItem = fakeData
    .filter(sx => sx.category === "breakfast")
    .slice(0, 6);
  // console.log(props);
  // console.log(sixItem);
  const [item, setItem] = useState(sixItem);

  const showAllItems = sixItem.map(sbi => (
    <SingleItem key={sbi.id} singleItem={sbi}></SingleItem>
  ));

  return (
    <div className="container breakfastContainer d-flex flex-wrap justify-content-around">
      {showAllItems}
    </div>
  );
};

export default Breakfast;
