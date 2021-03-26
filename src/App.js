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
  };
  const reset = () => {
    const container = document.getElementsByTagName("main")[0].children;
    for (let i = 0; i < container.length; i++) {
      container[i].style.backgroundColor = "rgb(250, 214, 214)";
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
