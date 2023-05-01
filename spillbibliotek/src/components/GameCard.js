import React from "react";

function GameCard({ title, description, hoverText, buttonText }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{hoverText}</span>
      <div className="pic"></div>
      <button>{buttonText}</button>
    </article>
  );
}

export default GameCard;