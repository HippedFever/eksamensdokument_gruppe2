import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavourites from "./MyFavourites";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <main>
      <Header />
      <span>
      <GameShop />
      <MyGames />
      <MyFavourites />
      </span>
      <Footer />
    </main>
  );
}

export default Dashboard;