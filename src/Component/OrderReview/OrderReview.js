import React from "react";
import { Link } from "react-router-dom";

const OrderReview = () => {
  return (
    <div>
      <h4>Please Check your Order</h4>

      <Link to="/login" className="btn btn-success">
        Please Login First
      </Link>
    </div>
  );
};

export default OrderReview;
