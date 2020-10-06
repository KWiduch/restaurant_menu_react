import React from "react";
import "./Navbar.css";

function Navbar({ filter, setFilter }) {
  const btnAll = () => {
    setFilter("all");
    console.log(filter);
  };
  const btnBreakfast = () => {
    setFilter("breakfast");
  };
  const btnLunch = () => {
    setFilter("lunch");
  };
  const btnShakes = () => {
    setFilter("shake");
  };
  const btnDinner = () => {
    setFilter("dinner");
  };

  return (
    <>
      <div className="navbar__container">
        <h1 className="navbar__header">Our Menu</h1>
        <div className="containerNav">
          <ul className="navbar__nav">
            <li>
              <button onClick={btnAll}>All</button>
            </li>
            <li>
              <button onClick={btnBreakfast}>Breakfast</button>
            </li>
            <li>
              <button onClick={btnLunch}>Lunch</button>
            </li>
            <li>
              <button onClick={btnShakes}>Shakes</button>
            </li>
            <li>
              <button onClick={btnDinner}>Dinner</button>
            </li>
            {/* <li>Drinks</li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
