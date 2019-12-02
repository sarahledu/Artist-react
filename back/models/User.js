const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  image: String
});


const userModel = mongoose.model("User", userSchema);
module.exports = userModel;