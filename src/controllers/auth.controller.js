require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) return res.send({message:"Provided email already exists"});

        user = await User.create(req.body);

        const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);

        return res.send({ user, token });
    } catch (error) {
        return res.send(error.message);
    }
}

const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (!user) return res.send({message:"Given email or password is incorrect"});

        const check = user.checkPassword(req.body.password);

        if (!check) return res.send({message:"Given email or password is incorrect"});

        const token =  jwt.sign({ user }, process.env.JWT_SECRET_KEY);

        return res.send({user, token});
    } catch (error) {
        return res.send(error.message);
    }
}

module.exports = { register, login }