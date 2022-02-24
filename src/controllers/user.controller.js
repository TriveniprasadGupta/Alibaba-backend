require("dotenv").config();
const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, user) {
            if (err) return reject(err);
            return resolve(user.user);
        });
    });
}

const router = express.Router();

router.get("", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.send(users);
    } catch (error) {
        return res.send(error.message);
    }
});


router.get("/:token", async (req, res) => {
    try {
        const user = await verifyToken(req.params.token);
        return res.send(user);
    } catch (error) {
        return res.send(error.message);
    }
});

module.exports = router;