"use client";
import { useState } from "react";
import Cell from "./component/cell";
import "./globals.css";

export default function Home() {
  const [cell, setcell] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="container">
      <div className="dashboard">
        {cell.map((cell, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
}
