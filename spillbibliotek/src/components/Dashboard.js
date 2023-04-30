import React from "react";
import { Link } from "react-router-dom";
import MyFavourites from "./MyFavourites";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Vennligst velg en av følgende:</p>
      <ul>
        <li>
          <Link to="/gameshop">Visit Shop</Link>
        </li>
        <li>
          <Link to="/mygames">Go to library</Link>
        </li>
        <li>
          <Link to="/myfavourites">Go to favorites</Link>
        </li>
      </ul>

      <MyFavourites />
    </div>
  );
}

export default Dashboard;