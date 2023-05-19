import React from "react";
import { Link } from "react-router-dom";
import BuyButton from "./BuyButton";
import Heart from "./Heart";


function GameCard({ title, genres, description, hoverText, backgroundImage, gameId, onBuyButtonClick }) {

  const handleHeartClick = (event) => {
    event.stopPropagation();
  };

  const handleButtonClick = () => {
    if (typeof onBuyButtonClick === "function") {
      onBuyButtonClick(gameId);
    }
  };

  

  return (
      <article className="card" onClick={handleButtonClick}>
        <Heart onClick={handleHeartClick} />
        <div className="pic" style={{ backgroundImage: `url(${backgroundImage})` }}>          <Link to={`/gameshop/games/${gameId}`} className="game-card-link">
          <button onClick={handleButtonClick} className="readButton">Read more!</button>
          </Link></div>
        <div className="content">
          <h2>{title}</h2>

          <BuyButton buttonText="BUY" onButtonClick={handleButtonClick} />
        </div>
      </article>
  );
}

export default GameCard;