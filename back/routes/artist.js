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

router.post("/manage-artists/delete", (req, res) => {
  artistModel
    .findByIdAndRemove({ _id: req.body.id })
    .then(res.redirect("/manage-artists"))
    .catch(err => console.log(err));
});

module.exports = router;
