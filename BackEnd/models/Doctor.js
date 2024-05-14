const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  yearOfExprience: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
