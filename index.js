const express = require("express");
const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;
const keys = require("./config/keys");
const app = express();

const PORT = process.env.PORT || 5000;

let scopes = ["identify", "email"];

passport.use(
  new DiscordStrategy(
    {
      clientID: keys.discordClientID,
      clientSecret: keys.discordClientSecret,
      callbackURL: "/api/discord/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token: ", accessToken);
      console.log("refresh token: ", refreshToken);
      console.log("profile: ", profile);
    }
  )
);

app.get(
  "/auth/discord",
  passport.authenticate("discord", {
    scope: scopes
  })
);

app.get("/api/discord/callback", passport.authenticate("discord"));

app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}`);
});
