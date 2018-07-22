module.exports = app => {
  app.post("/api/listing", (req, res) => {
    console.log(req.body);

    res.send({});
  });
};
