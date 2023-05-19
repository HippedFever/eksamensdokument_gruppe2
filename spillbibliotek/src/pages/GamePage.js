import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import GameDetails from "../components/GameDetails";
import Footer from "../components/Footer";

function GamePage() {
  const { gameId } = useParams();

  return (
    <main>
      <Header />
      <GameDetails gameId={gameId} />
      <Footer />
    </main>
  );
}

export default GamePage;