import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <h1>Best food waiting for your belly</h1>
      <div>
        <input type="text" className="search" placeholder="Search food items" />
        <button type="submit" className="signup">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
