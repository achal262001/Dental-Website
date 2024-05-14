import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full text-white  bg-gray-700 ">
      <div className="uppercase relative sm:pt-5 hover:text-yellow-200 sm:pb-1 flex py-1 pt-1 justify-center">
        dentistry @ saveetha
      </div>
      <nav>
        <ul className="flex gap-4 py-2 ">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/doctor">Doctor</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
