import React from "react";

function MyFavourites() {
  const favourites = [
    { title: "Game 1", platform: "PC" },
    { title: "Game 3", platform: "Xbox" },
  ];

  return (
    <div>
      <h2>My Favourites</h2>
      <ul>
        {favourites.map((game, index) => (
          <li key={index}>
            {game.title} ({game.platform})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyFavourites;