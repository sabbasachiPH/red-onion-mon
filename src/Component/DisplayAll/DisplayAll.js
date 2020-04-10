import React, { useState, useEffect } from "react";
import SingleItem from "../SingleItem/SingleItem";
import Banner from "../Banner/Banner";
import Marketing from "../Marketing/Marketing";
import Footer from "../Footer/Footer";
import "./DisplayAll.css";
import NavCategory from "../NavCategory/NavCategory";

const DisplayAll = () => {
  const [item, setItem] = useState([]);
  const [filteredItems, setfilteredItems] = useState(null);
  useEffect(() => {
    fetch("https://red-mongo.herokuapp.com/showAllmenu")
      .then((res) => res.json())
      .then((data) => {
        setItem(shuffle(data));
      });
  }, []);

  const showSixLunchItems = item
    .filter((ca) => ca.category === "breakfast")
    .map((sbi) => <SingleItem key={sbi._id} singleItem={sbi}></SingleItem>)
    .slice(0, 6);

  const filterData = (e) => {
    // filter data according to the button clicked
    const desiredCategoryName = e.target.innerText;
    const categoryNameLowerCase = desiredCategoryName.toLowerCase();
    const desiredList = item
      .filter((re) => re.category === categoryNameLowerCase)
      .slice(0, 6);
    setfilteredItems(desiredList);
    // change the active class
    handleActiveClass(e.target);
  };

  const showCustomList =
    filteredItems &&
    filteredItems
      .map((item) => <SingleItem key={item._id} singleItem={item}></SingleItem>)
      .slice(0, 6);

  function handleActiveClass(element) {
    console.log(element);
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    element.className += " active";
  }

  function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

  return (
    <div className="d-flex flex-column">
      <Banner></Banner>
      <div id="buttonDIV" className="d-flex justify-content-center p-2 m-2">
        <button className="linkCategory active" onClick={filterData}>
          Breakfast
        </button>
        <button className="linkCategory" onClick={filterData}>
          Lunch
        </button>
        <button className="linkCategory" onClick={filterData}>
          Dinner
        </button>
      </div>
      <div className="breakfastContainer d-flex flex-wrap justify-content-around">
        {showCustomList ? showCustomList : showSixLunchItems}
      </div>
      <Marketing></Marketing>
      <Footer></Footer>
    </div>
  );
};

export default DisplayAll;
