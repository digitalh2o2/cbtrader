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
      callbackURL: "/auth/discord/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ discordId: profile.id });

      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({ discordId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
