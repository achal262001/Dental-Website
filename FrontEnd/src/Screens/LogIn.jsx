import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LogIn() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/", { email, password })
        .then((res) => {
          if (res.data == "exist") {
            history("/home");
          } else if (res.data == "notexist") {
            alert("User is not sign up");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-gray-200 w-1/2 rounded-2xl">
        <h1 className="text-center py-2 font-bold">Log In Page</h1>
        <form action="POST">
          <div className=" py-4 px-3">
            <div>
              <label className="block" htmlFor="Name">
                E-mail :
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg py-1"
                type="email"
                name="Name"
                placeholder="Email/Phone"
              />
            </div>
            <div>
              <label className="block" htmlFor="password">
                Password :
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg py-1"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="px-2 py-2 flex justify-between">
            <button type="submit" onClick={HandleSubmit}>
              {" "}
              Log In
            </button>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
