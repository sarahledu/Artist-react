const express = require("express");
const albumModel = require("./../models/Album");
const router = new express.Router();

router.get("/manage-albums", (req, res) => {
  albumModel
    .find()
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(err => console.log(err));
});
router.post("/manage-albums/delete", (req, res) => {
  albumModel
    .findByIdAndDelete({ _id: req.body.id })
    .then(res.redirect("/manage-albums"))
    .catch(dbErr => {
      console.log(dbErr);
    });
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
