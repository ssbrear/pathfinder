function Square({ squareFuncs, index }) {
  return (
    <button
      index={index}
      onClick={squareFuncs[0]}
      onContextMenu={squareFuncs[1]}
      contextMenu={false}
      className="square"
    ></button>
  );
}

export default Square;
