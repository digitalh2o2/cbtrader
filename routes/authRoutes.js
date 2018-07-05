const passport = require("passport");

module.exports = app => {
  let scopes = ["identify", "email"];
  app.get(
    "/auth/discord",
    passport.authenticate("discord", {
      scope: scopes
    })
  );

  app.get(
    "/auth/discord/callback",
    passport.authenticate("discord"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
