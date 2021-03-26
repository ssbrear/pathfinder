import Square from "./Square";
function Main({ count, squareFuncs }) {
  const makeSquares = () => {
    let squares = [];
    for (let i = 0; i < count; i++) {
        let end = false;
        if (i === Math.ceil(count/3) || i === 2*Math.ceil(count/3)) {
            end = true;
        }
      squares.push(<Square squareFuncs={squareFuncs} key={i} index={i} end={end}/>)
    }
    return squares;
  };

  return <main>{makeSquares()}</main>;
}

export default Main;
