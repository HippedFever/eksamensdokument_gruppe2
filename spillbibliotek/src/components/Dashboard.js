import React from "react";
import Header from "./Header";
import MyFavourites from "./MyFavourites";
import Footer from "./Footer";


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