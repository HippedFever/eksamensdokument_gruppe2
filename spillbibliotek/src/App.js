import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import GameShop from './pages/GameShop';
import MyGames from './pages/MyGames';
import MyFavourites from './pages/MyFavourites';
import './css/main.css'

function App() {
  return (
    <Router>
      <div>
 

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/gameshop" element={<GameShop />} />
          <Route path="/mygames" element={<MyGames />} />
          <Route path="/myfavourites" element={<MyFavourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;