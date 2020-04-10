import React from "react";
import "./SingleItem.css";
import { Link } from "react-router-dom";

const SingleItem = (props) => {
  //console.log(props.singleItem);
  const {
    picture,
    price,
    menuName,
    id,
    _id,
    category,
    description,
  } = props.singleItem;
  return (
    // <Link className="route-link" to={"/" + category + "/" + id}>
    <Link className="route-link" to={"/allMenu/" + id}>
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
