import React from "react";
import "./SingleItem.css";
import { Link } from "react-router-dom";

const SingleItem = (props) => {
  console.log(props.singleItem);
  const {
    picture,
    price,
    menuName,
    id,
    category,
    description,
  } = props.singleItem;
  return (
    // <h1>What's the problem</h1>
    <Link className="route-link" to={"/" + category + "/" + id}>
      <div className="itemCard">
        <img src={picture} alt="MenuItemPic" />
        <div className="itemCardInfo d-flex flex-column justify-content-center align-items-center">
          <h5>{menuName}</h5>
          <p>{description}</p>
          <h5>Price: ${price}</h5>
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;
