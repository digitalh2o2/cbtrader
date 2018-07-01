const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const authRoutes = require("./routes/authRoutes");

mongoose.connect(
  keys.mongoUri,
  () => {
    console.log("Connected to database!");
  }
);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}`);
});
