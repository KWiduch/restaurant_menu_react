import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Meal from "./components/Meal";
import Meals from "./components/Meals";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="App">
      <Navbar filter={filter} setFilter={setFilter} />
      <Meals filter={filter} />
    </div>
  );
}

export default App;
