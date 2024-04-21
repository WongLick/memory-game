import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/CardList.css";
import geodude from "../assets/geodude.png";

function CardList() {
  const URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setError(null);
      setIsLoading(true);
      const randomPokemons = [];
      try {
        for (let i = 0; i < 8; i++) {
          const randomID = Math.floor(Math.random() * 150) + 1;
          const response = await fetch(`${URL}/${randomID}`);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          randomPokemons.push({
            name: data.name,
            image: data.sprites.front_default,
          });
        }
        setPokemon(randomPokemons);
      } catch (error) {
        console.error("Fetch data failed.", error);
        setError("Failed to fetch data. Please try again.");
      }
      setIsLoading(false);
    };
    fetchPokemons();
  }, []);

  if (isLoading) {
    return <div className="cardGrid">Loading...</div>;
  }

  if (error) {
    return <div className="cardGrid">{error}</div>;
  }

  return (
    <div className="cardGrid">
      {pokemon.map((pokemon, index) => (
        <Card key={index} name={pokemon.name} image={pokemon.image} />
      ))}
    </div>
  );
}

export default CardList;
