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
      <div className="App">
        <nav className="App-header">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/gameshop">GameShop</Link>
            </li>
            <li>
              <Link to="/mygames">My Games</Link>
            </li>
            <li>
              <Link to="/favourites">My Favourites</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/gameshop" element={<GameShop />} />
          <Route path="/mygames" element={<MyGames />} />
          <Route path="/favourites" element={<MyFavourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;