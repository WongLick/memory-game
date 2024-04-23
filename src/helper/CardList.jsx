import React from "react";
import Card from "../components/Card";
import "../styles/CardList.css";

export function CardList({ pokemonList, func }) {
  return (
    <div className="cardGrid">
      {pokemonList.map((pokemonList, index) => (
        <Card
          key={index}
          name={pokemonList.name}
          image={pokemonList.image}
          onclick={() => func(pokemonList.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
