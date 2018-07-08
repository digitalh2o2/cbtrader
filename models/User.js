const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  discordId: String,
  discordUsername: String,
  discordDiscriminator: String,
  discordEmail: String
});

mongoose.model("users", userSchema);
