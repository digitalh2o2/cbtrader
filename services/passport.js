const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new DiscordStrategy(
    {
      clientID: keys.discordClientID,
      clientSecret: keys.discordClientSecret,
      callbackURL: "/api/discord/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ discordId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            discordId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
