import React from "react";
// import fakeData from "../../resources/DummyData/fakeData";

const Inventory = () => {
  // const product = fakeData[0];

  // fetch("http://localhost:4200/showAllmenu")

  fetch("https://red-mongo.herokuapp.com/showAllmenu")
    .then((res) => res.json())
    .then((data) => displayMenu(data));

  function displayMenu(menu) {
    const menuList = document.getElementById("menu-list");
    for (let i = 0; i < menu.length; i++) {
      const menuItem = menu[i];
      appendMenu(menuItem, menuList);
    }
  }
  function appendMenu(menuItem, menuList) {
    const menuListItem = document.createElement("li");
    menuListItem.innerText = `As ${menuItem.category} We have ${menuItem.menuName} Price: Tk. ${menuItem.price} Detail: ${menuItem.description}.`;
    menuList.appendChild(menuListItem);
  }
  // const handleInsertAllMenu = () => {
  //   console.log("Total Menu Item Before Post", fakeData.length);
  //   console.log("Data Before Post", fakeData);

  //   fetch("http://localhost:4200/addMenu", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(fakeData), // body data type must match "Content-Type" header
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("post Successful ", data);
  //     });
  // };

  const handleAddMenu = () => {
    alert("Uncomment Your fetch Portion");
    const menuName = document.getElementById("menuName").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const picture = document.getElementById("picture").value;
    const menu = { menuName, price, category, description, picture };

    //fetch("http://localhost:4200/addMenu", {

    fetch("https://red-mongo.herokuapp.com/addMenu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menu), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("post Successful ", data);
        updateMenuList(data);
        clearInput();
        thanks();
      });
  };
  function thanks() {
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }
  function clearInput() {
    document.getElementById("menuName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    document.getElementById("picture").value = "";
  }
  function updateMenuList(menu) {
    const menuList = document.getElementById("menu-list");
    appendMenu(menu, menuList);
    document.getElementById("menuList").innerHTML = menu.menuName;
  }

  return (
    <div className="container">
      <h1>Red Onion Restaurent</h1>
      <p id="menuList"></p>

      <div className="row">
        <input
          type="text"
          className="form-control"
          id="menuName"
          placeholder="Menu Name"
        />
        <input
          type="text"
          className="form-control"
          id="price"
          placeholder="Price"
        />
        <input
          type="text"
          className="form-control"
          id="category"
          placeholder="Category"
        />
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Description"
        />
        <input
          type="text"
          className="form-control"
          id="picture"
          placeholder="Paste Your Picture's URL"
        />
        <button
          className="btn btn-primary"
          id="addMenu"
          disabled="disabled"
          // onClick={handleAddMenu}
        >
          Add New Menu
        </button>
        <button disabled="disabled">disabled</button>

        {/* <button
          className="btn btn-primary"
          id="addMenu"
          onClick={handleInsertAllMenu}
        >
          Insert All Data to DB
        </button> */}
      </div>
      <p style={{ color: "green", display: "none" }} id="successMessage">
        <small> Product Added Successfully</small>
      </p>
      <h6>Five Items Shown Here</h6>
      <ul id="menu-list"></ul>
    </div>
  );
};

export default Inventory;
