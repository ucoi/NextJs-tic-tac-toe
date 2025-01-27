"use client";
import { useState, useEffect } from "react";
import Cell from "./component/cell";
import "./globals.css";

export default function Home() {
  const [cells, setcells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentplayer, setcurrentplayer] = useState("circle");
  const [winningMessage, setwinningMessage] = useState("");

  const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    let winner = "";
    winning.forEach((win) => {
      const circleWins = win.every((index) => cells[index] === "circle");
      const crossWins = win.every((index) => cells[index] === "cross");

      if (circleWins) {
        winner = "Circle Wins";
      } else if (crossWins) {
        winner = "Cross Wins";
      }
    });

    if (winner) {
      setwinningMessage(winner);
    } else if (cells.every((cell) => cell !== "")) {
      setwinningMessage("Draw");
    }
  }, [cells]);

  const resetGame = () => {
    setcells(["", "", "", "", "", "", "", "", ""]);
    setcurrentplayer("circle");
    setwinningMessage("");
  };

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
            disabled={!!winningMessage}
          />
        ))}
      </div>
      <div>{winningMessage}</div>
      {!winningMessage && <div>{`It is now ${currentplayer}'s turn!`}</div>}
      {winningMessage && <button onClick={resetGame}>Restart Game</button>}
    </div>
  );
}
