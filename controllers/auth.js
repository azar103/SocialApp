const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("express");
const config = require("config");
exports.signUp = async (req, res) => {
  const { userName, password, email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(401).send({ msg: "User exist !!" });
    user = new User({ userName, password, email });
    const hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;
    const token = jwt.sign({ _id: user.id }, config.get("secretToken"), {
      expiresIn: "30d",
    });
    await user.save();
    return res.status(200).send({ user, token, msg: "Signup Success" });
  } catch (error) {
    return res.status(500).send({ msg: "server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(404).send({ msg: "bad credentials" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(500).send({ msg: "bad credentials" });
    }
    const token = jwt.sign({ _id: user.id }, config.get("secretToken"), {
      expiresIn: "30d",
    });
    return res.status(200).send({ user, token, msg: "Login Success" });
  } catch (error) {
    return res.status(500).send({ msg: "server error" });
  }
};

exports.authUser = (req, res) => {
  return res.status(200).send({
    user: req.user,
  });
};
