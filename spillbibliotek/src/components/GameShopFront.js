import { Link } from "react-router-dom";
import GameCard from "./GameCard";

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

function GameStore() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Game Shop</h2>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            platform={game.platform}
            price={game.price}
            purchaseLink={game.purchaseLink}
            imageUrl={game.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default GameStore;
