import React from "react";
import "../styles/Card.css";

function Card({ name, image }) {
  return (
    <div className="card">
      <button>
        <img src={image} alt="Pokemon" />
        <div>{name}</div>
      </button>
    </div>
  );
}

export default Card;
