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

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
