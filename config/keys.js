if (process.env.NODE_ENV === "production") {
  // use prod.js
  module.exports = require("./prod");
} else {
  // use dev.js
  module.exports = require("./dev");
}
