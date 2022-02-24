const express = require("express");

const router = express.Router();

const get = require("./controller-function");

const { ActionAndSportsCamera, ActionAndSportsCameraAcessory, BabyAndPetMonitor, Backgrounds } = require("../models/electronics.model");



router.get("/action&sports-camera", get(ActionAndSportsCamera));
router.get("/action&sports-camera-acessory", get(ActionAndSportsCameraAcessory));
router.get("/baby&pet-monitor", get(BabyAndPetMonitor));
router.get("/backgrounds", get(Backgrounds));

module.exports = router;
