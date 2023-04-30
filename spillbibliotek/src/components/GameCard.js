import React from "react";

function GameCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <span>{props.hoverText}</span>
      <div className="pic"></div>
      <button>{props.buttonText}</button>
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
        <GameCard
          key={index}
          title={game.title}
          description={game.description}
          hoverText={game.hoverText}
          buttonText={game.buttonText}
        />
      ))}
    </div>
  );
}

export default MyFavourites;