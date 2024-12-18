import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import data from "./db";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/dogs">Home </Link>
      {data.dogs.map((dog, index) => (
        <Link key={index} to={`/dogs/${dog.name}`}>
          {dog.name}
        </Link>
      ))}
    </nav>
  );
}
export default NavBar;
