import React from "react";
import "./DogDetails.css";
import { useParams, Redirect } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
  if (!dog) {
    return <Redirect to="/dogs" replace />;
  }

  return (
    <div className="dog-detail-container">
      <h1 className="dog-name">{dog.name}</h1>
      <img className="dog-image" src={dog.src} alt={dog.name} />
      <p className="dog-age">Age: {dog.age}</p>
      <h3 className="dog-facts-title">Fun Facts</h3>
      <ul className="dog-facts">
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
