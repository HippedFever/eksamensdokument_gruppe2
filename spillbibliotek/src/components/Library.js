import React from "react";
import GameCard from "../components/GameCard";

function Library() {
  const games = [
    { title: "Game 1", platform: "PC" },
    { title: "Game 2", platform: "PlayStation" },
    { title: "Game 3", platform: "Xbox" },
  ];

  return (
    <div>
      <h2>My Games</h2>
      <div>
        {games.map((game, index) => (
          <GameCard key={index} title={game.title} platform={game.platform} />
        ))}
      </div>
    </div>
  );
}

export default Library;