import React from "react";

function GameCard({ title, description, hoverText, buttonText, backgroundImage }) {
  return (
    <article className="card">
      <div className="image-container">
      <div className="pic" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="hover-text">{hoverText}</div>
        <button>{buttonText}</button>
      </div>
    </article>
  );
}

export default GameCard;