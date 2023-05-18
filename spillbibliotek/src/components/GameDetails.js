import React, { useState, useEffect } from "react";

function GameDetails({ gameId }) {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=27e0f70c258642ebab90d7b2680c5c4b`);
        const data = await response.json();
        setGame(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGameDetails();
  }, [gameId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!game) {
    return <p>Unable to fetch game details.</p>;
  }

  const {
    name,
    description,
    released,
    background_image,
    website,
    metacritic,
    platforms,
  } = game;

  return (
    <main>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Released: {released}</p>
        <img src={background_image} alt={name} />
        <p>Website: <a href={website}>{website}</a></p>
        <p>Metacritic Score: {metacritic}</p>
        <p>Platforms: {platforms.map((platform) => platform.name).join(", ")}</p>
      </div>
    </main>
  );
}

export default GameDetails;