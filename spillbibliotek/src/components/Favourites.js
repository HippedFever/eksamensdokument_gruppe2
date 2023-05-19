import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import PurchasedGames from "./purchasedGames";
import FavoritedGames from "./favoritedGames";


function Favourites() {
  const [games, setGames] = useState([]);

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

  useEffect(() => {
    const fetchGameDetails = async () => {
      const gamePromises = FavoritedGames.map(async (gameId) => {
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=27e0f70c258642ebab90d7b2680c5c4b`);
        const data = await response.json();
        return data;
      });

      const gameData = await Promise.all(gamePromises);
      setGames(gameData);
    };

    fetchGameDetails();
  }, []);

  return (
    <div>
      <h2>My Favourites</h2>
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {games.map((game, index) => (
          <GameCard
            key={index}
            gameId={game.id}
            title={game.name}
            hoverText={game.hoverText}
            backgroundImage={game.background_image}
            onBuyButtonClick={handleBuyButtonClick}
            onHeartClick={handleHeartClick}
          />
        ))}
      </section>
    </div>
  );
}

export default Favourites;