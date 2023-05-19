// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GameShop from "./pages/GameShop";
import MyGames from "./pages/MyGames";
import MyFavourites from "./pages/MyFavourites";
import GamePage from "./pages/GamePage";
import "./css/main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gameshop" element={<GameShop />} />
        <Route path="/gameshop/games/:gameId" element={<GamePage />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/myfavourites" element={<MyFavourites />} />
      </Routes>
    </Router>
  );
}

export default App;