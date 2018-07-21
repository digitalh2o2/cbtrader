const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema({
  pokemonName: String,
  pokemonLevel: String,
  pokemonOrigin: String,
  _user: { type: Scehma.Types.ObjectId, ref: "User" },
  datePosted: Date
});

mongoose.model("listings", listingSchema);
