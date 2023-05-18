import React from "react";
import BuyButton from "./BuyButton";
import Heart from "./Heart";

function GameCard({ title, description, hoverText, backgroundImage, onButtonClick }) {
  const handleHeartClick = (event) => {
    event.stopPropagation();
  };

  const handleButtonClick = () => {
    if (typeof onButtonClick === "function") {
      onButtonClick();
    }
  };

  return (
    <article className="card" onClick={handleButtonClick}>
      <Heart onClick={handleHeartClick} />
        <div className="pic" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="hover-text">{hoverText}</div>
        <BuyButton buttonText="BUY" onButtonClick={handleButtonClick} />
      </div>
    </article>
  );
}

export default GameCard;