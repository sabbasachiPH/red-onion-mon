import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id} Item Details comming sooon</h1>
    </div>
  );
};

export default ItemDetail;
