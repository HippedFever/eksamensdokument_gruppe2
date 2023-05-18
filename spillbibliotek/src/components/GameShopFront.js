import React from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";

function GameStore() {
  const games = [
    {
      title: "Game 1",
      platform: "PC",
      price: "$29.99",
      purchaseLink: "https://example.com/buy/game1",
      imageUrl: "https://example.com/game1.jpg"
    },
    {
      title: "Game 2",
      platform: "PlayStation",
      price: "$39.99",
      purchaseLink: "https://example.com/buy/game2",
      imageUrl: "https://example.com/game2.jpg"
    },
    {
      title: "Game 3",
      platform: "Xbox",
      price: "$49.99",
      purchaseLink: "https://example.com/buy/game3",
      imageUrl: "https://example.com/game3.jpg"
    },
  ];

  return (
    <div>
      <h2>Game Shop</h2>
      <section>
        {games.map((game, index) => (
          <GameCard
            key={index}
            game={game}
          />
        ))}
      </section>
    </div>
  );
}

export default GameStore;