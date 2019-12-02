const express = require("express");
const albumModel = require("./../models/Album");
const router = new express.Router();

router.get("/all-albums", (req, res) => {
  albumModel
    .find()
    .then(dbRes => console.log(dbRes))
    .catch(err => console.log(err));
});

router.post("/album-create", (req, res) => {
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
    .then(dbRes=>res.json(dbRes))
    .catch(err=>{console.log(err);res.json(err)});
});

module.exports = router;
