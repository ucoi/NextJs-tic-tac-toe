import React from "react";

const Cell = ({ currentplayer, setcurrentplayer, id, cells, setcells }) => {
  const handleclick = (e) => {
    const nottaken = !cells[id];

    if (nottaken) {
      if (currentplayer === "circle") {
        handlecellchange("circle");
        setcurrentplayer("cross");
      } else if (currentplayer === "cross") {
        handlecellchange("cross");
        setcurrentplayer("circle");
      }
    }
  };

  const handlecellchange = (celltochange) => {
    let coptcell = [...cells];
    coptcell[id] = celltochange;
    setcells(coptcell);
  };

  return (
    <div className="square" onClick={handleclick}>
      <div className={cells[id]}>
        {cells[id] ? (cells[id] === "circle" ? "O" : "X") : ""}
      </div>
    </div>
  );
};

export default Cell;
