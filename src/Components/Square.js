function Square({ squareFuncs, index, end}) {
    let color;
    if (end === true) color = 'blue';
    else color = ''
  return (
    <button
      index={index}
      onClick={squareFuncs[0]}
      onContextMenu={squareFuncs[1]}
      className="square"
      data-value = {end}
      style={{backgroundColor: color}}
    ></button>
  );
}

export default Square;
