import React from "react";
import "../styles/Card.css";

function Card({ name, image, onclick }) {
  return (
    <div className="card">
      <button onClick={onclick}>
        <img src={image} alt="Pokemon" />
        <div>{name}</div>
      </button>
    </div>
  );
}

export default Card;
