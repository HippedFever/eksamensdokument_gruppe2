import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import GameShop from './pages/GameShop';
import MyGames from './pages/MyGames';
import MyFavourites from './pages/MyFavourites';
import './css/main.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gameshop" element={<GameShop />} />
        <Route path="/mygames" element={<MyGames />} />
        <Route path="/myfavourites" element={<MyFavourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;