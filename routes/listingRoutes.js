const mongoose = require("mongoose");

const Listing = mongoose.model("listings");

module.exports = app => {
  app.post("/api/listing", async (req, res) => {
    const { name, level, location } = req.body;

    const listing = new Listing({
      pokemonName: name,
      pokemonLevel: level,
      pokemonOrigin: location,
      pokemonOwner: req.user.discordUsername,
      _user: req.user.id,
      datePosted: Date.now()
    });

    try {
      console.log(req.body);

      await listing.save();
      res.send({});
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  });

  app.get("/api/listings", async (req, res) => {
    console.log(req.body);

    const listings = await Listing.find({});
    console.log(listings);
    res.send(listings);
  });
};
