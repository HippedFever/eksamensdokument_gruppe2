import React from "react";
import Header from "../components/Header";
import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavourites from "./MyFavourites";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <main>
      <Header />
      <GameShop />
      <MyGames />
      <MyFavourites />
      <Footer />
    </main>
  );
}

export default Dashboard;