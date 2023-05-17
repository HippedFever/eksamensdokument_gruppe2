import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Library from "../components/Library";
import Favourites from "../components/Favourites";
import GameShopComp from "../components/GameShopFront"

function Dashboard() {
  return (
    <main>
      <Header />
      <GameShopComp />
      <Library />
      <Favourites />
      <Footer />
    </main>
  );
}

export default Dashboard;