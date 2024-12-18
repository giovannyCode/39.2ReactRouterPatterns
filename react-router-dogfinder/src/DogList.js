import React from "react";
import { useHistory } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
  const history = useHistory();

  const handleDogClick = (name) => {
    history.push(`/dogs/${name.toLowerCase()}`); // Navigate to the dog's detail page
  };

  return (
    <div className="dog-list-container">
      <h1 className="dog-list-title">Dog List</h1>
      <ul className="dog-list">
        {dogs.map((dog, index) => (
          <li
            key={index}
            className="dog-item"
            onClick={() => handleDogClick(dog.name)}
          >
            <img className="dog-image" src={dog.src} alt={dog.name} />
            <div className="dog-name">{dog.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
