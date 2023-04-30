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
        {/* Menyen */}
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/gameshop">Game Shop</Link>
            </li>
            <li>
              <Link to="/mygames">My Games</Link>
            </li>
            <li>
              <Link to="/myfavourites">My Favourites</Link>
            </li>
          </ul>
        </nav>

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