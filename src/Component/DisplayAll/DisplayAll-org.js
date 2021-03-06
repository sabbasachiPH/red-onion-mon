import React, { useState, useEffect } from "react";
// import fakeData from "../../resources/DummyData/fakeData";
import SingleItem from "../SingleItem/SingleItem";
import Banner from "../Banner/Banner";
import Marketing from "../Marketing/Marketing";
import Footer from "../Footer/Footer";
import "./DisplayAll.css";

const DisplayAll = () => {
  const [item, setItem] = useState([]);
  const [filteredItems, setfilteredItems] = useState(null);
  useEffect(() => {
    // fetch("http://localhost:4200/showAllmenu")
    fetch("https://red-mongo.herokuapp.com/showAllmenu")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const randomData = shuffle(data);
        setItem(
          //   randomData.filter((me) => me.category === "dinner").slice(0, 6)
          randomData
        );
      });
  }, []);

  const showSixLunchItems = item
    .filter((ca) => ca.category === "breakfast")
    .map((sbi) => <SingleItem key={sbi.id} singleItem={sbi}></SingleItem>)
    .slice(0, 6);

  const breakfast = item.filter((e) => e.cmategory === "breakfast");
  const lunch = item.filter((e) => e.category === "lunch");
  const dinner = item.filter((e) => e.category === "dinner");

  const showBreakfast = (e) => {
    setfilteredItems(breakfast);
    handleActiveClass(e.target);
  };
  const showLunch = (e) => {
    setfilteredItems(lunch);
    handleActiveClass(e.target);
  };
  const showDinner = (e) => {
    setfilteredItems(dinner);
    handleActiveClass(e.target);
  };

  const showCustomList =
    filteredItems &&
    filteredItems
      .map((item) => <SingleItem key={item.id} singleItem={item}></SingleItem>)
      .slice(0, 6);

  function handleActiveClass(element) {
    console.log(element);
    // const header = document.getElementById("buttonDIV");
    // const btns = header.getElementsByClassName("linkCategory");
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    element.className += " active";
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function () {
    //     const current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace("active", "");
    //     this.className += " active";
    //   });
    // }
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
        {/* <button className="linkCategory active" onClick={() => showB()}> */}
        <button className="linkCategory active" onClick={showBreakfast}>
          Breakfast
        </button>
        {/* <button className="linkCategory" onClick={() => showL()}> */}
        <button className="linkCategory" onClick={showLunch}>
          Lunch
        </button>
        <button className="linkCategory" onClick={showDinner}>
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
