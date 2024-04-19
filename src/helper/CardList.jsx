import React from "react";
import Card from "../components/Card";
import "../styles/CardList.css";
import geodude from "../assets/geodude.png";

function CardList() {
  return (
    <div className="cardGrid">
      <Card name="Geodude" image={geodude} />
      <Card name={2} image={geodude} />
      <Card name={3} image={geodude} />
      <Card name={4} image={geodude} />
      <Card name={5} image={geodude} />
      <Card name={6} image={geodude} />
      <Card name={7} image={geodude} />
      <Card name={8} image={geodude} />
    </div>
  );
}

export default CardList;
