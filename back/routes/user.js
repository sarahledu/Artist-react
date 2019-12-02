const express = require("express");
const userModel = require("../models/User");
const router = new express.Router();
const uploadCloud = require("../config/cloudinary");

router.get("/", (req, res) => {
  userModel
    .find()
    .then(dbRes => {
      res.json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.post("/", uploadCloud.single("image"), (req, res) => {
  const { userName, firstName, lastName } = req.body;
  const newUser = {
    userName,
    firstName,
    lastName
  };
  if (req.file) newUser.image = req.file.secure_url;
  
  userModel
    .create(newUser)
    .then(dbRes => {
      res.send(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
