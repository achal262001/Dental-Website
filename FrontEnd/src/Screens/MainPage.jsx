import React from "react";
import NavBar from "../Components/LayOut/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/LayOut/Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet>
        <div>Hellow</div>
      </Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Home;
