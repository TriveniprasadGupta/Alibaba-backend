require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const { uuid } = require('uuidv4');
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:4101/auth/google/callback",
  passReqToCallback: true
},
  async function (request, accessToken, refreshToken, profile, done) {

    let user = await User.findOne({ email: profile?.email }).lean().exec();

    if (!user) {
      user = await User.create({
        email: profile?.email,
        password: uuid(),
        role: ["customer"]
      });
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);

    return done(null, { user, token });
  }
));

module.exports = passport;