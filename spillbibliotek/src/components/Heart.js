import React, { useState, useEffect } from "react";
import FavoritedGames from "./favoritedGames";

function Heart({ gameId }) {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(FavoritedGames.includes(gameId));
  }, [gameId]);

  const handleButtonClick = (event) => {
    event.stopPropagation();

    if (isFilled) {
      const index = FavoritedGames.indexOf(gameId);
      if (index !== -1) {
        FavoritedGames.splice(index, 1);
      }
    } else {
      if (!FavoritedGames.includes(gameId)) {
        FavoritedGames.push(gameId);
      }
    }

    setIsFilled(!isFilled);
  };

  return (
    <span
      className={`heart-icon ${isFilled ? "filled" : ""}`}
      onClick={handleButtonClick}
    >
      {isFilled ? "❤️" : "🖤"}
    </span>
  );
}

export default Heart;
