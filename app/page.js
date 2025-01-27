"use client";
import { useState } from "react";
import Cell from "./component/cell";
import "./globals.css";

export default function Home() {
  const [cells, setcells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentplayer, setcurrentplayer] = useState("circle");

  console.log(cells);

  return (
    <div className="container">
      <div className="dashboard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            currentplayer={currentplayer}
            setcurrentplayer={setcurrentplayer}
            key={index}
            cells={cells}
            setcells={setcells}
            cell={cell}
          />
        ))}
      </div>
      <div>{`it is now ${currentPl}`} </div>
    </div>
  );
}