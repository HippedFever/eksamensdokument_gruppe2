import React from "react";
import { Link } from "react-router-dom";
import BuyButton from "./BuyButton";
import Heart from "./Heart";


function GameCard({ title, backgroundImage, gameId, onBuyButtonClick, onHeartClick }) {

  const handleButtonClick = (buttonType) => {
    if (buttonType === "buy" && typeof onBuyButtonClick === "function") {
      onBuyButtonClick(gameId);
    } else if (buttonType === "heart" && typeof onHeartClick === "function") {
      onHeartClick(gameId);
    }
  };



  return (
      <article className="card" >
        <Heart gameId={gameId} onClick={() => handleButtonClick("heart")} />
        <div className="pic" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Link to={`/gameshop/games/${gameId}`} className="game-card-link">
          <button className="readButton">Read more!</button>
          </Link>
        </div>
        <div>
          <h2>{title}</h2>
          <BuyButton buttonText="BUY" onButtonClick={() => handleButtonClick("buy")} />
        </div>
      </article>
  );
}

export default GameCard;