const mongoose = require("mongoose");

const ActionAndSportsCamera = mongoose.model("action&sports-camera", new mongoose.Schema());
const ActionAndSportsCameraAcessory = mongoose.model("action&sports-camera-acessory", new mongoose.Schema());
const BabyAndPetMonitor = mongoose.model("baby&pet-monitor", new mongoose.Schema());
const Backgrounds = mongoose.model("backgrounds", new mongoose.Schema());

module.exports = {ActionAndSportsCamera,ActionAndSportsCameraAcessory,BabyAndPetMonitor,Backgrounds};