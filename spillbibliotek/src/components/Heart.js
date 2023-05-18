import React, { useState } from "react";

function Heart() {
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = (event) => {
    event.stopPropagation();
    setIsFilled(!isFilled);
  };

  return (
    <span
      className={`heart-icon ${isFilled ? "filled" : ""}`}
      onClick={handleHeartClick}
    >
      {isFilled ? "❤️" : "🖤"}
    </span>
  );
}

export default Heart;