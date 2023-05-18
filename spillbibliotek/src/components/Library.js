// Library.js
import React from "react";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

function Library() {
  const games = [
    { title: "Game 1", description: "Description 1", hoverText: "Hover text 1", backgroundImage: "url-to-image-1", platform: "PC" },
    { title: "Game 2", description: "Description 2", hoverText: "Hover text 2", backgroundImage: "url-to-image-2", platform: "PlayStation" },
    { title: "Game 3", description: "Description 3", hoverText: "Hover text 3", backgroundImage: "url-to-image-3", platform: "Xbox" },
    { title: "Game 3", description: "Description 3", hoverText: "Hover text 3", backgroundImage: "url-to-image-3", platform: "Xbox" },
  ];

  const handleButtonClick = (title) => {
    console.log(`Clicked on ${title}`);
  };

  return (
    <div>
      <h2>My Games</h2>
      <section style={{ display: "flex", flexDirection: "column" }}>
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            description={game.description}
            hoverText={game.hoverText}
            backgroundImage={game.backgroundImage}
            onButtonClick={() => handleButtonClick(game.title)}
          />
        ))}
      </section>
      <Link to="/mygames" className="btn">
        Go to My Games
      </Link>
    </div>
  );
}

export default Library;