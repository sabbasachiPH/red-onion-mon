import React from "react";
import "./SingleBreakfastItem.css";

const SingleBreakfastItem = props => {
  const { picture, price, itemName } = props.singleBreakfastItem;
  console.log(props.singleBreakfastItem.picture);
  return (
    <div className="itemCard">
      <img src={picture} alt="picture of breakfast" />
      <h3>{itemName}</h3>
      <h4>Price: ${price}</h4>
    </div>
  );
};

export default SingleBreakfastItem;
