import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/CardList.css";

function CardList() {
  const URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialPokemon, setInitialPokemon] = useState([]);
  const [score, setScore] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      setError(null);
      setIsLoading(true);
      const pokemonList = [];
      try {
        for (let i = 0; i < 20; i++) {
          //change to 450
          const response = await fetch(`${URL}/${i + 1}`);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          pokemonList.push({
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
          });
        }
        setPokemon(pokemonList);
      } catch (error) {
        console.error("Fetch data failed.", error);
        setError("Failed to fetch data. Please try again.");
      }

      let tempArr = [];

      for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * pokemonList.length);
        let temp = pokemonList[randomIndex];

        if (i > 0 && temp.id !== tempArr[i - 1].id + 1) {
          tempArr.push(temp);
        } else if (i === 0) {
          tempArr.push(temp);
        } else {
          i--;
        }
        pokemonList.splice(randomIndex, 1);
      }
      setInitialPokemon(tempArr);
      console.log(tempArr.length);
      setIsLoading(false);
    };
    fetchPokemons();
  }, []);

  const pokemonClicked = (id) => {
    setScore([...score, id]);
  };

  if (isLoading) {
    return <div className="cardGrid">Loading...</div>;
  }

  if (error) {
    return <div className="cardGrid">{error}</div>;
  }

  return (
    <div className="cardGrid">
      {initialPokemon.map((initialPokemon, index) => (
        <Card
          key={index}
          name={initialPokemon.name}
          image={initialPokemon.image}
          func={() => pokemonClicked(initialPokemon.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
