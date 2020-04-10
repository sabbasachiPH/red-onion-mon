import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useEffect } from "react";
import SingleItem from "../SingleItem/SingleItem";
import NavCategory from "../NavCategory/NavCategory";

const usePrevious = (value) => {
  const prev = useRef();
  useEffect(() => {
    prev.current = value;
  }, [value]);
  return prev.current;
};

const ItemDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);

  //Item detail
  const [seletedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // fetch("http://localhost:4200/allMenu/" + id)
    fetch("https://red-mongo.herokuapp.com/allMenu/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectedItem(data);
      });
  }, []);
  console.log(seletedItem);
  return (
    <div>
      <NavCategory></NavCategory>
      <h1>id: {id} category - Item Details unders Construction</h1>
      {/* <SingleItem key={selectedItem.id} singleItem={item}></SingleItem> */}

      <div>
        {seletedItem && <SingleItem singleItem={seletedItem}></SingleItem>}
      </div>

      <h4>
        Current:{count} Previous: {previous}
      </h4>
      <FontAwesomeIcon
        icon={faPlus}
        className="header-link"
        size="3x"
        onClick={() => setCount(count + 1)}
      />

      <FontAwesomeIcon
        icon={faMinusSquare}
        className="header-link"
        size="3x"
        onClick={() => setCount(count - 1)}
      />

      <Link to="/" className="btn btn-info">
        Shop More.. Click here...
      </Link>
      <Link to="/orderReview" className="btn btn-primary">
        Go for Order Review
      </Link>
    </div>
  );
};

export default ItemDetail;
