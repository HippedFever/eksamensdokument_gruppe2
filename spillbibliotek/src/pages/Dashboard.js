import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "../components/Header";
import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavourites from "./MyFavourites";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/gameshop" component={GameShop} />
        <Route path="/mygames" component={MyGames} />
        <Route path="/myfavourites" component={MyFavourites} />
      </Switch>
      <Footer />
    </main>
  );
}

export default Dashboard;