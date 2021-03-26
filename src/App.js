import "./App.css";
import Main from "./Components/Main";
import React from "react";

function App() {
  let numberOfSquares = 1000;
  let breakpoint = Math.ceil(numberOfSquares / 3);

  const squareClick = (e) => {
    if (e.target.dataset.value === "false") {
      e.target.style.backgroundColor = "black";
    }
  };
  const squareContext = (e) => {
    e.preventDefault();
    if (e.target.dataset.value === "false") {
      e.target.style.backgroundColor = "";
    }
  };
  const reset = () => {
    const container = document.getElementsByTagName("main")[0].children;
    for (let i = 0; i < container.length; i++) {
      if (i === breakpoint || i === 2 * breakpoint) continue;
      container[i].style.backgroundColor = "";
    }
  };
  const start = () => {
    const listOfSquares = document.getElementsByTagName("main")[0].children;
    let array = Array.from(Array(20), () => new Array(50));
    let endpoints = [];
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 50; j++) {
        array[i][j] = listOfSquares[i * 50 + j].dataset.value;
        if (
          listOfSquares[i * 50 + j].style.backgroundColor !== "blue" &&
          listOfSquares[i * 50 + j].style.backgroundColor !== "black"
        ) {
          listOfSquares[i * 50 + j].style.backgroundColor = "green";
          setTimeout(() => {
            listOfSquares[i * 50 + j].style.backgroundColor = "";
          }, 500);
        } else endpoints.push([i, j]);
      }
    }

    let Q = [
      [endpoints[0][0] + 1, endpoints[0][1]],
      [endpoints[0][0] - 1, endpoints[0][1]],
      [endpoints[0][0], endpoints[0][1] + 1],
      [endpoints[0][0], endpoints[0][1] - 1],
    ];
    setTimeout(() => {
      while (Q.length !== 0 && Q.length < 50) {
        let newQ = [];
        for (let i = 0; i < Q.length; i++) {
          if (listOfSquares[Q[i][0] * 50 + Q[i][1]] === undefined) {
            Q.shift();
            i--;
          }
          if (
            listOfSquares[Q[i][0] * 50 + Q[i][1]].style.backgroundColor !==
              "blue" &&
            listOfSquares[Q[i][0] * 50 + Q[i][1]].style.backgroundColor !==
              "black"
          ) {
            listOfSquares[Q[i][0] * 50 + Q[i][1]].style.backgroundColor =
              "green";
          }
          if (
            Q[i][0] - endpoints[1][0] === 0 &&
            Q[i][1] - endpoints[1][1] === 0
          ) {
            console.log("Done!");
            Q = [];
            newQ = [];
            break;
          } else if (
            listOfSquares[Q[i][0] * 50 + Q[i][1]].style.backgroundColor !==
            "black"
          ) {
            if (
              listOfSquares[Q[i][0] * 50 + Q[i][1] + 1] &&
              listOfSquares[Q[i][0] * 50 + Q[i][1] + 1].style
                .backgroundColor !== "green"
            )
              newQ.push([Q[i][0], Q[i][1] + 1]);
            if (
              listOfSquares[Q[i][0] * 50 + Q[i][1] - 1] &&
              listOfSquares[Q[i][0] * 50 + Q[i][1] - 1].style
                .backgroundColor !== "green"
            )
              newQ.push([Q[i][0], Q[i][1] - 1]);
            if (
              listOfSquares[Q[i][0] * 50 + Q[i][1] + 50] &&
              listOfSquares[Q[i][0] * 50 + Q[i][1] + 50].style
                .backgroundColor !== "green"
            )
              newQ.push([Q[i][0] + 1, Q[i][1]]);
            if (
              listOfSquares[Q[i][0] * 50 + Q[i][1] - 50] &&
              listOfSquares[Q[i][0] * 50 + Q[i][1] - 50].style
                .backgroundColor !== "green"
            )
              newQ.push([Q[i][0] - 1, Q[i][1]]);
          }
        }
        Q = [];
        for (let i = 0; i < newQ.length; i++) {
          let flag = false;
          for (let j = 0; j < Q.length; j++) {
            if (newQ[i][0] - Q[j][0] === 0 && newQ[i][1] - Q[j][1] === 0) {
              flag = true;
              break;
            }
          }
          if (flag === false) Q.push(newQ[i]);
        }
      }
      console.log("While loop finished");
    }, 1000);
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
      <div id="buttons">
        <button id="start-button" type="button" onClick={start}>
          Start
        </button>
        <button id="reset-button" type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
