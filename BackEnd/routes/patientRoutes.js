const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPatient = new Patient(data);
    const response = await newPatient.save();
    res.status(200).json(response);
    console.log("Patienst data is saved succesfully");
  } catch (err) {
    console.log("The error is :", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { name, PhoneNumber, email, password, gender, address } = req.body;
  const data = {
    name: name,
    PhoneNumber: PhoneNumber,
    email: email,
    password: password,
    gender: gender,
    address: address,
  };
  try {
    const check = await Patient.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await Patient.insertMany([data]);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Patient.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ error: "client error" });
  }
});

module.exports = router;
