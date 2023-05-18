import React, { useState, useEffect } from "react";
import GameCard from "../components/GameCard";


function GameStore() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const url = `https://api.rawg.io/api/games?key=27e0f70c258642ebab90d7b2680c5c4b&dates=2023-01-01,2023-12-31&metacritic=70,100&ordering=-metacritic&page_size=5`;
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGames();
  }, []);

    return (
      <main>
        <div>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <>
              <h2>Top Rated Games of 2023</h2>
              <section
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {games.map((game) => (
                  <GameCard
                    key={game.id}
                    title={game.name}
                    description={game.description}
                    hoverText={game.hoverText}
                    buttonText={game.buttonText}
                    backgroundImage={game.background_image}
                  />
                ))}
              </section>
            </>
          )}
        </div>
      </main>
    );
  }


export default GameStore;
