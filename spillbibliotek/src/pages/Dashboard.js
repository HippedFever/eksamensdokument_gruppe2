import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Library from "../components/Library";
import Favourites from "../components/Favourites";
import GameShopComp from "../components/GameShopFront";
// import Cart from "../components/Cart";

function Dashboard() {
  return (
    <div>
      <Header />
      <main style={{ display: "grid", gridTemplateColumns: "1fr", padding: "20px", }}>
        <section>
          <GameShopComp />
        </section>
        <section>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <Library />
            <Favourites />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;