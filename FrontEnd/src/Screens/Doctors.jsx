import React, { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import axios from "axios";

function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const [addDoctor, setAddDoctor] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [yearOfExprience, setYearOfExprience] = useState("");
  const [degree, setDegree] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log({ name, phoneNumber, email, password });
      await axios.post("http://localhost:5000/doctor", {
        name,
        phoneNumber,
        email,
        password,
        yearOfExprience,
        degree,
        address,
      });
    } catch (err) {
      console.log("Sign Up error", err);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor")
      .then((docotr) => setDoctors(docotr.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(doctors);
  return (
    <>
      {doctors.map((doc) => {
        return (
          <Card
            name={doc.name}
            degree={doc.degree}
            about={doc.yearOfExprience}
            img=""
          ></Card>
        );
      })}
      <button
        className="inline-block bg-black text-white"
        onClick={() => setAddDoctor((pre) => !pre)}
      >
        Add New Doctor
      </button>

      {addDoctor && (
        <div>
          <div className="h-screen w-full flex justify-center items-center">
            <div className="bg-gray-200 w-1/2 rounded-2xl">
              <h1 className="text-center py-2 font-bold">
                Please Fill the Information
              </h1>
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
                    <label className="block" htmlFor="password">
                      yearOfExprience :
                    </label>
                    <input
                      className="w-full rounded-lg py-1"
                      type="text"
                      value={yearOfExprience}
                      onChange={(e) => setYearOfExprience(e.target.value)}
                      name="yearOfExprience"
                      placeholder="yearOfExprience"
                    />
                  </div>
                  <div className="my-1">
                    <label className="block" htmlFor="password">
                      Degree :
                    </label>
                    <input
                      className="w-full rounded-lg py-1"
                      type="text"
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      name="Degree"
                      placeholder="Degree"
                    />
                  </div>
                  <div className="my-1">
                    <label className="block" htmlFor="password">
                      address :
                    </label>
                    <input
                      className="w-full rounded-lg py-1"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      name="address"
                      placeholder="address"
                    />
                  </div>
                </div>
                <div className="px-2 py-2 flex justify-between">
                  <button onClick={handleClick} type="submit">
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Doctor;
