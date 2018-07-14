const mongoose = require('mongoose')
const { Schema } = mongoose;

const listingSchema = new Schema({
  pokemonName: String,
  pokemonIv: String,
  pokemonOrigin: String
})

mongoose.model('listings', listingSchema);