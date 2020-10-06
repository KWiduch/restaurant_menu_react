import React, { useState } from "react";
import "./Meals.css";
import Meal from "./Meal";

// DO ZMIANY PATRZ ---> APP.JS

function Meals({ filter }) {
  const [meals, setMeals] = useState([
    {
      name: "big boss burger",
      price: 38,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/Burger.jpg",
      id: ["dinner", "all"],
    },
    {
      name: "spaghetti bolognese",
      price: 29,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/bolo.jpg",
      id: ["dinner", "all"],
    },
    {
      name: "Chefs stake",
      price: 48,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/stake.jpg",
      id: ["dinner", "all"],
    },
    {
      name: "Sweeet Chicken",
      price: 32,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg",
      id: ["lunch", "all"],
    },
    {
      name: "Grilled chicken ",
      price: 32,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/lunch.jpg",
      id: ["lunch", "all"],
    },
    {
      name: "Croped American Breakfast ",
      price: 17,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/cropped-American-Breakfast.jpg",
      id: ["breakfast", "all"],
    },
    {
      name: "stack pancakes",
      price: 19,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/stack-pancakes-blog-post-1000px.jpg",
      id: ["breakfast", "all"],
    },
    {
      name: "sunny side egg",
      price: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/sunny-side-egg-in-toast-recipe.jpg",
      id: ["breakfast", "all"],
    },
    {
      name: "cooookie shake",
      price: 9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/shake-ciasteczkowy-850x1275.jpg",
      id: ["shake", "all"],
    },
    {
      name: "vanilla shake",
      price: 9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/shake-waniliowy.jpg",
      id: ["shake", "all"],
    },
    {
      name: "strawberry shake",
      price: 9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas placeat maiores deleniti molestias dignissimos atque",
      photo: "./img/shake-truskawkowy.jpg",
      id: ["shake", "all"],
    },
  ]);
  //funkcja umozliwiajca wybor id
  const setting = () => {
    if (filter === "all") {
      var num = 1;
      return num;
    } else var num = 0;
    return num;
  };

  // filtruje dania
  const results = meals.filter((meal) => meal.id[setting()] === filter);
  // console.log(results);
  // console.log(meals.id);
  return (
    <>
      <div className="meals__container">
        {/* wyswietlam juz zfiltrowane dania z bazy */}
        {results.map((result) => (
          <div>
            <Meal result={result} filter={filter} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Meals;
