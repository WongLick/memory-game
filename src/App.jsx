import "./App.css";
import Navbar from "./components/Navbar";
import CardList from "./helper/CardList";
import { useState, useEffect } from "react";

function App() {
  const URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialPokemon, setInitialPokemon] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch(`${URL}?limit=150`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((resp) => resp.json())
          )
        );
        const tempArr = pokemonDetails.map((pokemonData) => ({
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
        }));
        setPokemon(tempArr);
      } catch (error) {
        console.error("Fetch data failed.", error);
        setError("Failed to fetch data. Please try again.");
      }

      setIsLoading(false);
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (pokemon.length) {
      let tempArr = [];
      while (tempArr.length < 10) {
        let randomIndex = Math.floor(Math.random() * pokemon.length);
        let candidate = pokemon[randomIndex];
        if (!tempArr.some((p) => p.id === candidate.id)) {
          tempArr.push(candidate);
        }
      }
      setInitialPokemon(tempArr);
    }
  }, [pokemon, clickedPokemon]);

  const addScore = (id) => {
    const highscore = localStorage.getItem("highscore");
    console.log(`Clicked pokemon id: ${id}`);

    for (let i = 0; i < clickedPokemon.length; i++) {
      if (clickedPokemon[i] === id) {
        console.log("You lose");
        setGameOver(true);
        if (score > highscore) {
          localStorage.setItem("highscore", score);
          console.log(`Highscore = ${highscore}`);
        }
      }
    }

    setClickedPokemon((clickedPokemon) => [...clickedPokemon, id]);
    setScore((currentScore) => currentScore + 1);
  };

  if (gameOver) {
    confirm(`Game over!! Your score is ${score - 1}`);
    setClickedPokemon([]);
    setScore(0);
    setGameOver(false);
  }

  if (isLoading) {
    return <div className="cardGrid">Loading...</div>;
  }

  if (error) {
    return <div className="cardGrid">{error}</div>;
  }

  return (
    <>
      <Navbar currentScore={score} highestScore={score} />
      <CardList pokemonList={initialPokemon} func={addScore} />
    </>
  );
}

export default App;
