import React, { useState } from 'react';

function MyFavourites() {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (game) => {
    setFavourites([...favourites, game]);
  };

  return (
    <div>
      <h2>My Favourites</h2>
      <div className="game-container">
        <GameCard title="Game 1" platform="PC" addToFavourites={addToFavourites} />
        <GameCard title="Game 3" platform="Xbox" addToFavourites={addToFavourites} />
      </div>
      <h2>Favorittspill:</h2>
      {favourites.map((game, index) => (
        <p key={index}>{game}</p>
      ))}
    </div>
  );
}

function GameCard({ title, platform, addToFavourites }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{platform}</p>
      <button onClick={() => addToFavourites(title)}>Legg til favoritter</button>
    </div>
  );
}

export default MyFavourites;
