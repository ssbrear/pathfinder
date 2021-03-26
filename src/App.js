import "./App.css";
import Main from "./Components/Main";
import React from "react";

function App() {
  let numberOfSquares = 1000;

  const squareClick = (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = "black";
  };
  const squareContext = (e) => {
    e.preventDefault();
    console.log(e.target);
    e.target.style.backgroundColor = "red";
  }

  return (
    <div className="App">
      <header>
        <h1 id="title">Pathfinder</h1>
      </header>
      <Main squareFuncs={[squareClick, squareContext]} count={numberOfSquares} />
    </div>
  );
}

export default App;
