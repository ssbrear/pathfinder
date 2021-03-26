function Square({ squareFuncs, index }) {
  return (
    <button
      index={index}
      onClick={squareFuncs[0]}
      onContextMenu={squareFuncs[1]}
      className="square"
    ></button>
  );
}

export default Square;
