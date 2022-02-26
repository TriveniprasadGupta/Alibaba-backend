const express = require("express");
const connect = require("./config/db");
const { body } = require('express-validator');
const cors = require('cors');
const app = express();
app.use(express.json());

<<<<<<< Updated upstream
app.use(cors());

const passport = require("./config/google-oauth");
=======
// const passport = require("./config/google-oauth");
>>>>>>> Stashed changes

const electronicsControllers = require("./controllers/electronics.controllers");
const apparelsControllers = require("./controllers/apparels.controllers");

const { register, login } = require("./controllers/auth.controller");

const userController = require('./controllers/user.controller');

app.post("/register",
  body("email").isEmail(),
  body("password").custom(value => {
    if (value.length<8) {
      throw new Error('Minimum password length should be 8');
    }
    return true;
  }),
  body("telNo").custom(value => {
    if ((String(value)).length!=10) {
      throw new Error('Please enter 10 digit number');
    }
    return true;
  }),
  register);
app.post("/login", login);

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

// app.get('/auth/google',
//   passport.authenticate('google', {
//     scope:
//       ['email', 'profile']
//   }
//   ));

// app.get('/auth/google/callback',
//   passport.authenticate('google', {
//     // successRedirect: '/auth/google/success',
//     failureRedirect: '/auth/google/failure'
//   }));

app.use("/users", userController);
app.use("/electronics", electronicsControllers);
app.use("/apparels", apparelsControllers);

const PORT = 4101;
app.listen(PORT, async (req, res) => {
  try {
    await connect();
    console.log(`Listening on port ${PORT}`);
  } catch (error) {
    console.log({ message: error.message });
  }
})