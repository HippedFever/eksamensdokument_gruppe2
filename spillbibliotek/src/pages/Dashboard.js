import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Library from "../components/Library";
import Favourites from "../components/Favourites";
import GameShopComp from "../components/GameShopFront";


function Dashboard() {
  return (
    <span className="dashboard">
      <Header />
      <main className="main">
        <section className="section">
          <GameShopComp />
        </section>
        <section className="section">
            <Library className="library-section" />
            <Favourites className="favourites-section" />
        </section>
      </main>
      <Footer />
    </span>
  );
}

export default Dashboard;