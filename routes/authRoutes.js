const passport = require("passport");

module.exports = app => {
  let scopes = ["identify", "email"];
  app.get(
    "/auth/discord",
    passport.authenticate("discord", {
      scope: scopes
    })
  );

  app.get("/api/discord/callback", passport.authenticate("discord"));
};
