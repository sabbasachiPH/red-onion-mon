import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useEffect } from "react";

const usePrevious = (value) => {
  const prev = useRef();
  useEffect(() => {
    prev.current = value;
  }, [value]);
  return prev.current;
};

const ItemDetail = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);

  return (
    <div>
      <h1>id: {id} category - Item Details comming sooon</h1>
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
