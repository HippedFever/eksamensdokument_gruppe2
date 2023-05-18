import React from "react";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

function Favourites() {
  const favourites = [
    { title: "Jinx", description: "A manic and impulsive criminal from Zaun Crest.", hoverText: "Hover here", buttonText: "" },
    { title: "Yasuo", description: "An Ionian of deep resolve, Yasuo is an agile swordsman.", hoverText: "Hover here", buttonText: "" },
  ];

  return (
    <div>
      <h2>My Favourites</h2>
      <section style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        {favourites.slice(0, 2).map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </section>
      <Link to="/myfavourites" className="btn">
        Go to My Favourites
      </Link>
    </div>
  );
}

export default Favourites;