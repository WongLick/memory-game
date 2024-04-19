import React, { useEffect } from "react";
import Card from "../components/Card";
import "../styles/CardList.css";
import geodude from "../assets/geodude.png";

function CardList() {
  const URL = "https://pokeapi.co/api/v2/pokemon";
  const ID = Math.round(Math.random() * 10);

  useEffect(() => {
    const fetchPokemon = async () => {
      fetch(`${URL}/${ID}`)
        .then((response) => response.json())
        .then((data) => {
          renderCard(data);
        });
    };
    fetchPokemon();
  }, []);

  function renderCard(data) {
    const name = data.species.name;
    const image = data.sprites.front_default;
    console.log(data);
    console.log(name);
    console.log(image);
    return <Card name={name} image={image} />;
  }

  return (
    <div className="cardGrid">
      <Card name="Geodude" image={geodude} />
      <Card name={2} image={geodude} />
      <Card name={3} image={geodude} />
      <Card name={4} image={geodude} />
      <Card name={5} image={geodude} />
      <Card name={6} image={geodude} />
      <Card name={7} image={geodude} />
    </div>
  );
}

export default CardList;
