import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Library from "../components/Library";
import Favourites from "../components/Favourites";
import GameShopComp from "../components/GameShopFront";
//import Cart from "../components/Cart";

function Dashboard() {
  return (
    <main>
      <Header />
      <section className="unit1">
        <GameShopComp />
      </section>
      <section className="unit2">
        <Library />
      </section>
      <section className="unit3">
        <Favourites />
      </section>
      <Footer />
    </main>
  );
}

export default Dashboard;