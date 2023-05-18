import React from "react";

function BuyButton({ buttonText, onButtonClick }) {
  const handleButtonClick = () => {
    onButtonClick();
  };

  return (
    <button onClick={handleButtonClick}>{buttonText}</button>
  );
}

export default BuyButton;