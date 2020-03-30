import React from "react";
import "./SingleItem.css";
import { Link } from "react-router-dom";

const SingleItem = props => {
  const { picture, price, itemName, id, category } = props.singleItem;
  // console.log(props.singleItem);
  return (
    // <h1>What's the problem</h1>
    <Link to={"/" + category + "/" + id}>
      <div className="itemCard">
        <img src={picture} alt="picture of breakfast" />
        <div>
          <h3>{itemName}</h3>
          <h4>Price: ${price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;
