import "./App.css";
import Main from "./Components/Main";
import React from "react";

function App() {
  let numberOfSquares = 1000;

  const squareClick = (e) => {
    if (e.target.dataset.value === 'false') {
      e.target.style.backgroundColor = "black";
    }
  };
  const squareContext = (e) => {
    e.preventDefault();
    if (e.target.dataset.value === 'false') {
      e.target.style.backgroundColor = "";
    }
  };
  const reset = () => {
    const container = document.getElementsByTagName("main")[0].children;
    for (let i = 0; i < container.length; i++) {
      if (
        i === Math.ceil(numberOfSquares / 3) ||
        i === 2 * Math.ceil(numberOfSquares / 3)
      )
        continue;
      container[i].style.backgroundColor = "";
    }
  };

  return (
    <div className="App">
      <header>
        <h1 id="title">Pathfinder</h1>
      </header>
      <Main
        squareFuncs={[squareClick, squareContext]}
        count={numberOfSquares}
      />
      <button id="reset-button" type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
