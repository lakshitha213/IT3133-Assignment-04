import React from "react";
import "../assets/css/Animal.css";

export default function AnimalCards({
  animals,
  onClick,
  columns = 5,
  gap = "10px",
  borderColor = "white",
}) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
      }}
    >
      {animals.map((animal) => (
        <div
          key={animal.id}
          className="card"
          style={{
            border: `1px solid ${borderColor}`, 
          }}
          onClick={() => onClick(animal)}
        >
          <img
            src={require(`../assets/img/${animal.image}`)}
            alt={animal.name}
            className="image"
          />
        </div>
      ))}
    </div>
  );
}
