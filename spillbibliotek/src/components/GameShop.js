import React from "react";

function GameShop() {
const games = [
{
title: "Game 1",
platform: "PC",
price: "$29.99",
purchaseLink: "https://example.com/buy/game1",
},
{
title: "Game 2",
platform: "PlayStation",
price: "$39.99",
purchaseLink: "https://example.com/buy/game2",
},
{
title: "Game 3",
platform: "Xbox",
price: "$49.99",
purchaseLink: "https://example.com/buy/game3",
},
];

return (
<div>
<h2>Game Shop</h2>
<ul>
{games.map((game, index) => (
<li key={index}>
<h3>{game.title}</h3>
<p>{game.platform}</p>
<p>{game.price}</p>
<a href={game.purchaseLink}>Buy now</a>
</li>
))}
</ul>
</div>
);
}

export default GameShop;