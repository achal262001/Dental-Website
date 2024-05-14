import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  return <div>Hellow , Welcome to home page</div>;
}

export default Home;
