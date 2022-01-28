const mongoose = require("mongoose");
const db = require("./index.js");

const user = new mongoose.Schema({
  name : String,
  password : String,
  email : String,
  phone : Number,

});

const Item = mongoose.model("Item", user);

module.exports = Item;