import React from "react";
import Footer from "../components/Footer";
import Library from "../components/Library";
import Header from "../components/Header";

function MyGames() {
  const games = [
    { title: "Game 1", platform: "PC" },
    { title: "Game 2", platform: "PlayStation" },
    { title: "Game 3", platform: "Xbox" },
  ];

  return (
    <main>
      <Header />
      <Library />
      <Footer />
    </main>
  );
}

export default MyGames;