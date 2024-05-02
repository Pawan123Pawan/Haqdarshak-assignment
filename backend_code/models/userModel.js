const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullname: String,
  gender: String,
  language: String,
  age: Number,
  dateOfBirth: String,
  district: String,
  state: String,
  pincode: Number,
  loginWithWay: String,
  verificationType: String,
  phoneNumber: Number,
});

exports.User = mongoose.model("User", userSchema);
