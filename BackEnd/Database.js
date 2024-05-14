const mongoose = require("mongoose");
require("dotenv").config();
const LocalURL = process.env.DB_LOCAL_URL;
const GlobalURL = process.env.DB_GLOBAL_URL;
mongoose.connect(LocalURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected");
});
module.exports = db;
