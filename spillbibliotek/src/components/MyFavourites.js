import React from "react";
import GameCard from "./GameCard";

function MyFavourites() {
const favourites = [
{ title: "Game 1", platform: "PC" },
{ title: "Game 3", platform: "Xbox" },
];

return (
<div>
<h2>My Favourites</h2>
<div className="game-container">
{favourites.map((game, index) => (
<GameCard key={index} title={game.title} platform={game.platform} />
))}
</div>
</div>
);
}

export default MyFavourites;