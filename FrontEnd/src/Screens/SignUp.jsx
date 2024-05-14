import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log({ name, phoneNumber, email, password, gender, address });
      await axios
        .post("http://localhost:5000/patient", {
          name,
          phoneNumber,
          email,
          password,
          gender,
          address,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history("/home");
          }
        });
    } catch (err) {
      console.log("Sign Up error", err);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-gray-200 w-1/2 rounded-2xl">
        <h1 className="text-center py-2 font-bold">Sign Up Page</h1>
        <form>
          <div className=" py-4 px-3">
            <div className="my-1">
              <label className="block" htmlFor="Name">
                Name :
              </label>
              <input
                className="w-full rounded-lg py-1"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="Name"
                placeholder="User Name"
              />
            </div>
            <div className="my-1">
              <label className="block" htmlFor="Name">
                Phone Number :
              </label>
              <input
                className="w-full rounded-lg py-1"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="Name"
                placeholder="Phone Number"
              />
            </div>
            <div className="my-1">
              <label className="block" htmlFor="Name">
                E-mail :
              </label>
              <input
                className="w-full rounded-lg py-1"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="Name"
                placeholder="Email"
              />
            </div>
            <div className="my-1">
              <label className="block" htmlFor="password">
                Password :
              </label>
              <input
                className="w-full rounded-lg py-1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="my-1">
              <label className="block" htmlFor="Name">
                Gender
              </label>
              <input
                className="w-full rounded-lg py-1"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
                placeholder="Gender"
              />
            </div>
            <div className="my-1">
              <label className="block" htmlFor="adress">
                Adresss
              </label>
              <input
                className="w-full rounded-lg py-1"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="px-2 py-2 flex justify-between">
            <button onClick={handleClick} type="submit">
              {" "}
              Sign Up{" "}
            </button>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
