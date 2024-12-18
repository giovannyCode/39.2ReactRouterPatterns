import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar({ colors }) {
  return (
    <nav className="NavBar">
      <Link to={`/colors/new`} className="add-color-link">
        Add a New Color
      </Link>
      {colors.map((color, index) => (
        <Link key={index} to={`/colors/${color}`}>
          {color}
        </Link>
      ))}
    </nav>
  );
}
export default NavBar;
