const express = require("express");
const router = express.Router();
const authCrl = require("../controllers/auth");
const {
  loginValidators,
  signupValidators,
  errorValidator,
} = require("../middlewares/bodyValidators");
const isAuth = require("../middlewares/isAuth");
router.post("/signup", signupValidators(), errorValidator, authCrl.signUp);
router.post("/login", loginValidators(), errorValidator, authCrl.login);
router.get("/me", isAuth, authCrl.authUser);

module.exports = router;
