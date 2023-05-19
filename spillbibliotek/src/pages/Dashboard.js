import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Library from "../components/Library";
import Favourites from "../components/Favourites";
import GameShopComp from "../components/GameShopFront";


function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <main className="main">
        <section className="section">
          <GameShopComp />
        </section>
        <section className="section">
          <div className="library-section">
            <Library />
          </div>
          <div className="favourites-section">
            <Favourites />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;