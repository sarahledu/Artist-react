const express = require("express");
const artistModel = require("../models/Artist");
const router = new express.Router();


router.get("/artists", (req,res)=>{
    artistModel.find()
    .then(dbRes=>console.log(dbRes))
    .catch(err=>console.log(err))
})

module.exports = router;