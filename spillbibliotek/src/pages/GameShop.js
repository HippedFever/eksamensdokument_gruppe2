import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GameCard from "../components/GameCard";

function GameShop() {
  const [games, setGames] = useState([]);
  const [searchGame, setSearchGame] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const url = searchGame
          ? `https://api.rawg.io/api/games?key=27e0f70c258642ebab90d7b2680c5c4b&search=${searchGame}`
          : `https://api.rawg.io/api/games?key=27e0f70c258642ebab90d7b2680c5c4b&dates=2023-01-01,2023-12-31&metacritic=70,100&ordering=-metacritic&page_size=10`;
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGames();
  }, [searchGame]);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchGame.toLowerCase())
  );

  return (
    <main>
      <Header />
      <div>
        <input
          className="searchBar"
          type="text"
          placeholder="Search Games"
          value={searchGame}
          onChange={(event) => setSearchGame(event.target.value)}
        />
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <h2>{searchGame ? "Search Results" : "Popular Games"}</h2>
            <section style={{ display: "flex", flexWrap: "wrap" }}>
            {filteredGames.map((game) => {
  console.log(game); // Lager en konsolllog for hvert spill rendret 
  return (
    <GameCard
      key={game.id}
      title={game.name}
      description={game.description}
      hoverText={game.hoverText}
      buttonText={game.buttonText}
      backgroundImage={game.background_image}
    />
  );
})}
</section>

          </>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default GameShop;