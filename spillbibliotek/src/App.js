import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavourites from './components/MyFavourites';
import './App.css';

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