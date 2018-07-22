module.exports = app => {
  app.post("/api/listing", async (req, res) => {
    try {
      console.log(req.body);

      res.send({})
    } catch (err) {
      console.log(err);
    }
  });
};
