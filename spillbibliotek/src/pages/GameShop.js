import React from "react";
import GameCard from "../components/GameCard";

function GameShop() {
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
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <h2>Game Shop</h2>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {games.map((game, index) => (
          <GameCard key={index} title={game.title} platform={game.platform} price={game.price} purchaseLink={game.purchaseLink} imageUrl={game.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default GameShop;