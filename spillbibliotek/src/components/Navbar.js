import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <h1 className="header-title">The Game Vault</h1>
      </Link>
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
        <li>
          <Link to="#" onClick={() => setCartOpen(true)}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;