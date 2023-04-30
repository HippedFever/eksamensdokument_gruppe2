import React from "react";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";

function MyGames() {
  const games = [
    { title: "Game 1", platform: "PC" },
    { title: "Game 2", platform: "PlayStation" },
    { title: "Game 3", platform: "Xbox" },
  ];

  return (
    <div>
      <Navbar />
      <h2>My Games</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {games.map((game, index) => (
          <GameCard key={index} title={game.title} platform={game.platform} />
        ))}
      </div>
    </div>
  );
}

export default MyGames;