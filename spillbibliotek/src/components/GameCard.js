import React from "react";

function GameCard({ title, description, hoverText, buttonText }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{hoverText}</span>
      <div className="pic"></div>
      <button>{buttonText}</button>
    </div>
  );
}

export default GameCard;