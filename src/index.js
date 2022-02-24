const express = require("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());

const passport = require("./config/google-oauth");

const electronicsControllers = require("./controllers/electronics.controllers");

const { register, login } = require("./controllers/auth.controller");

const userController = require('./controllers/user.controller');

app.post("/register", register);
app.post("/login", login);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', {
    scope:
      ['email', 'profile']
  }
  ));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    // successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
  }));

app.use("/users", userController);
app.use("/electronics", electronicsControllers);

const PORT = 4101;
app.listen(PORT, async(req,res)=>{
    try {
        await connect();
        console.log(`Listening on port ${PORT}`);
    } catch (error) {
        console.log({message:error.message});
    }
})