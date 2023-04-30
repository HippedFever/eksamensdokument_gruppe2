import React from "react";

function GameCard({ title, description, hoverText, buttonText }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{hoverText}</span>
      <div className="pic"></div>
      <button>{buttonText}</button>
    </div>
  );
}

function MyFavourites() {
  const favourites = [
    { title: "Jinx", description: "A manic and impulsive criminal from Zaun Crest.", hoverText: "Hover here", buttonText: "" },
    { title: "Yasuo", description: "An Ionian of deep resolve, Yasuo is an agile swordsman.", hoverText: "Hover here", buttonText: "" },
  ];

  return (
    <div className="container">
      {favourites.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </div>
  );
}

export default MyFavourites;