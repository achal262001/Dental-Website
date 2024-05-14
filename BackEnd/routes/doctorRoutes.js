const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newDoctor = new Doctor(data);
    const response = await newDoctor.save();
    console.log("data saved Docotr succesfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, PhoneNumber, email, password } = req.body;
    const data = {
      name: name,
      PhoneNumber: PhoneNumber,
      email: email,
      password: password,
    };
    await Patient.insertMany([data]);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Doctor.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ error: "client error" });
  }
});

module.exports = router;
