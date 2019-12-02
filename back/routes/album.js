const express = require("express");
const albumModel = require("./../models/Album");
const router = new express.Router();

router.get("/all-albums", (req, res) => {
  albumModel
    .find()
    .then(dbRes => {
      console.log(dbRes);
      res.send(dbRes);
    })
    .catch(err => console.log(err));
});

router.post("/create-album", (req, res) => {
  const {
    title,
    releaseDate,
    artist,
    cover,
    description,
    label,
    rates
  } = req.body;
  const newAlbum = {
    title,
    releaseDate,
    artist,
    cover,
    description,
    label,
    rates
  };

  albumModel
    .create(newAlbum)
    .then(dbRes => res.json(dbRes))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
