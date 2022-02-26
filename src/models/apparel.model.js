const mongoose = require("mongoose");

const MensClothing = mongoose.model("Mens-Clothing", new mongoose.Schema());
const Ethnicity = mongoose.model("Ethnicity", new mongoose.Schema());
const babyClothing = mongoose.model("babyClothing", new mongoose.Schema());


module.exports = {MensClothing,Ethnicity,babyClothing};