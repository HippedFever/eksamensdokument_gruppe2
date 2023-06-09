import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import PurchasedGames from "../components/purchasedGames";
import FavoritedGames from "./favoritedGames";



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

  const handleBuyButtonClick = (gameId) => {
    if (!PurchasedGames.includes(gameId)) {
      PurchasedGames.push(gameId);
      console.log(PurchasedGames);
    } else {
      console.log("This game is already in your library.");
    }
  };

  const handleHeartClick = (gameId) => {
    FavoritedGames.push(gameId);
    console.log(FavoritedGames);
  };


 
  return (
    <div>
      <h2>Game Shop - Top Games Right Now!</h2>

      <section style={{ display: "flex", flexDirection: "row" }}>
  {games.map((game) => (
    <GameCard
      key={game.id}
      gameId={game.id}
      title={game.name}
      genre={game.genre}
      description={game.description}
      hoverText={game.hoverText}
      buttonText={game.buttonText}
      backgroundImage={game.background_image}
      onBuyButtonClick={handleBuyButtonClick}
      onHeartClick={handleHeartClick}
    />
  ))}
</section>
    </div>
  );
}


export default GameStore;