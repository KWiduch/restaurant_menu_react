import React from "react";
import "./Meal.css";

// DO ZMIANY PATRZ ---> APP.JS

function Meal({ result }) {
  return (
    <>
      <div className={`meal__container ${result.id}`}>
        <div className="meal__photo">
          <img src={result.photo} alt="" />
        </div>
        <div className="meal__namePriceDescription">
          <div className="meal__namePrice">
            <div className="meal__namePrice-Name">{result.name}</div>
            <div className="meal__price">{result.price} pln</div>
          </div>
          <div className="meal__description">{result.description}</div>
        </div>
      </div>
    </>
  );
}

export default Meal;
