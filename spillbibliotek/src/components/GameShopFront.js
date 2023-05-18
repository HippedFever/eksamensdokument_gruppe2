import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";



function GameStore() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const url = `https://api.rawg.io/api/games?key=27e0f70c258642ebab90d7b2680c5c4b&dates=2023-01-01,2023-12-31&metacritic=70,100&ordering=-metacritic&page_size=3`;
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGames();
  }, []);

 
  return (
    <div>
      <h2>Game Shop - Top Games Right Now!</h2>
      <Link to="/gameshop" className="btn">
        Go to Game Shop
      </Link>
      <section style={{ display: "flex", flexDirection: "row" }}>
  {games.map((game) => (
    <GameCard
      key={game.id}
      gameId={game.id}
      title={game.name}
      description={game.description}
      hoverText={game.hoverText}
      buttonText={game.buttonText}
      backgroundImage={game.background_image}
    />
  ))}
</section>
    </div>
  );
}


export default GameStore;