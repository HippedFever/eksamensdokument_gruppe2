import React from "react";
import BuyButton from "./BuyButton";
import Heart from "./Heart";


function GameCard({ title, description, hoverText, backgroundImage, gameId, onBuyButtonClick }) {
  const handleHeartClick = (event) => {
    event.stopPropagation();
  };

  const handleBuyButtonClick = () => {
    if (typeof onBuyButtonClick === "function") {
      onBuyButtonClick(gameId);
    }
  };

  return (
    <article className="card">
      <Heart onClick={handleHeartClick} />
      <div className="pic" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="hover-text">{hoverText}</div>
        <BuyButton buttonText="BUY" onButtonClick={handleBuyButtonClick} />
      </div>
    </article>
  );
}

export default GameCard;
