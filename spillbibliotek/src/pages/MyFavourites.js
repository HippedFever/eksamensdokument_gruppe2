import React from "react";
import GameCard from "../components/GameCard";

function MyFavourites() {
  const favourites = [
    { title: "Jinx", description: "A manic and impulsive criminal from Zaun Crest.", hoverText: "Hover here", buttonText: "" },
    { title: "Yasuo", description: "An Ionian of deep resolve, Yasuo is an agile swordsman.", hoverText: "Hover here", buttonText: "" },
    { title: "Akali", description: "The Rogue Assassin, Akali is a deadly opponent in battle.", hoverText: "Hover here", buttonText: "" },
  ];

  return (
    <div>
      <h2>My Favourites</h2>
      <div className="container">
        {favourites.slice(0, 3).map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
}

export default MyFavourites;