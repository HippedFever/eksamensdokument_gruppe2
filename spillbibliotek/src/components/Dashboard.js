import React from "react";
import { Link } from "react-router-dom";
import MyFavourites from "./MyFavourites";
import Footer from "./Footer";
import Header from "./Header";


function Dashboard() {
  return (
    <main>
      <Header />
      <MyFavourites />
      <Footer />
    </main>
  );
}

export default Dashboard;