const express = require("express");

const router = express.Router();

const get = require("./controller-function");

const { MensClothing,Ethnicity,babyClothing} = require("../models/apparel.model");



router.get("/MensClothing", get(MensClothing));
router.get("/Ethnicity", get(Ethnicity));
router.get("/babyClothing", get(babyClothing));


module.exports = router;