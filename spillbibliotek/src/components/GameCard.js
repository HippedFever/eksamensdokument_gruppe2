import React from "react";
import BuyButton from "./BuyButton";
import Heart from "./Heart";

function GameCard({ title, description, hoverText, backgroundImage, onButtonClick }) {
  const handleHeartClick = (event) => {
    event.stopPropagation();
  };

  return (
    <article className="card">
      <Heart />
      <div className="image-container">
        <div className="pic" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="hover-text">{hoverText}</div>
        <BuyButton buttonText="BUY" onButtonClick={onButtonClick} />
      </div>
    </article>
  );
}

export default GameCard;