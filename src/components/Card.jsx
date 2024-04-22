import React from "react";
import "../styles/Card.css";

function Card({ name, image, func }) {
  return (
    <div className="card">
      <button onClick={func}>
        <img src={image} alt="Pokemon" />
        <div>{name}</div>
      </button>
    </div>
  );
}

export default Card;
