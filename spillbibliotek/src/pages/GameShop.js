import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GameStore from "../components/GameShopComp";

function GameShop() {
  return (
    <main>
    <Header />
    <GameStore />
    <Footer />
    </main>
  );
}

export default GameShop;