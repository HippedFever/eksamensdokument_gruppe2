import React, { useState, useEffect } from "react";

function BuyButton({ buttonText, onButtonClick }) {
  const [games, setGames] = useState([]);
  const handleButtonClick = () => {
    onButtonClick();
  };

  return (
    <button className="buyButton" onClick={handleButtonClick}>{buttonText}</button>
  );
}

export default BuyButton;