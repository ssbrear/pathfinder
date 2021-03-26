import Square from "./Square";
function Main({ count, squareFuncs }) {
  const makeSquares = () => {
    let squares = [];
    for (let i = 0; i < count; i++) {
      squares.push(<Square squareFuncs={squareFuncs} key={i} index={i}/>)
    }
    return squares;
  };

  return <main>{makeSquares()}</main>;
}

export default Main;
