const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.use(
  new DiscordStrategy(
    {
      clientID: keys.discordClientID,
      clientSecret: keys.discordClientSecret,
      callbackURL: "/api/discord/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log("profile", profile);
      new User({
        discordId: profile.id
      }).save();
    }
  )
);
