import React from "react";
import "./Color.css";

function Color({ color }) {
  return (
    <div className="Color" style={{ backgroundColor: color }}>
      {`This is ${color}!`}
    </div>
  );
}

export default Color;
