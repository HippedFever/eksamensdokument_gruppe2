import React from "react";

function MyGames() {
  const games = [
    { title: "Game 1", platform: "PC" },
    { title: "Game 2", platform: "PlayStation" },
    { title: "Game 3", platform: "Xbox" },
  ];

  return (
    <div>
      <h2>My Games</h2>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            {game.title} ({game.platform})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyGames;