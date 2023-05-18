import React from "react";
import { getCartItems, addToCart } from "./Cart"; // Import named exports

function Cart() {
  // Use the imported functions here
  const cartItems = getCartItems();
  addToCart("item");

  // Rest of the code
}

export default Cart;