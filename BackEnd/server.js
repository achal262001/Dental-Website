const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./Database");
const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/home", cors(), async (req, res) => {
  res.send("its Home Page");
});

app.post("/", cors(), async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await Patient.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/signup", cors(), async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await Patient.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (err) {
    console.log(err);
  }
});

app.use("/doctor", doctorRoutes);
app.use("/patient", patientRoutes);

// its my own Practice Code

app.listen(process.env.PORT || 5000, () =>
  console.log("server listen at 5000")
);
