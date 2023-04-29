import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2>Gameshop</h2>
          <p>Content for Gameshop section</p>
        </div>
        <div className="dashboard-section">
          <h2>My Games</h2>
          <p>Content for My Games section</p>
        </div>
        <div className="dashboard-section">
          <h2>My Favourites</h2>
          <p>Content for My Favourites section</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;