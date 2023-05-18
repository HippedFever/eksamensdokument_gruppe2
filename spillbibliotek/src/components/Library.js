import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";
import PurchasedGames from "./purchasedGames";

function Library() {
  const [games, setGames] = useState([]);

  const handleButtonClick = (title) => {
    console.log(`Clicked on ${title}`);
  };

  useEffect(() => {
    const fetchGameDetails = async () => {
      const gamePromises = PurchasedGames.map(async (gameId) => {
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
      <h2>My Games</h2>
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {games.map((game, index) => (
          <GameCard
            key={index}
            gameId={game.id}
            title={game.name}
            hoverText={game.hoverText}
            backgroundImage={game.background_image}
            onButtonClick={() => handleButtonClick(game.name)}
          />
        ))}
      </section>
      <Link to="/mygames" className="btn">
        Go to My Games
      </Link>
    </div>
  );
}

export default Library;
