const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  discordId: String
});

mongoose.model("users", userSchema);
