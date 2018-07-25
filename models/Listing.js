const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema({
  pokemonName: String,
  pokemonLevel: String,
  pokemonOrigin: String,
  pokemonOwner: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  datePosted: Date
});

mongoose.model("listings", listingSchema);
