const express = require("express");
const artistModel = require("./../models/Artist");
const router = new express.Router();

router.get("/manage-artists", (req, res) => {
  artistModel
    .find()
    .then(dbRes => {
      console.log(dbRes);
      res.send(dbRes);
    })
    .catch(err => console.log(err));
});

router.post("/create-artist", (req, res) => {
  const { name, style, description, isBand, rates } = req.body;
  const newArtist = {
    name,
    style,
    description,
    isBand,
    rates
  };
  artistModel
    .create(newArtist)
    .then(dbRes => res.json(dbRes))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
