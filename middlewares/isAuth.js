const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-token"];
    if (!token) return res.status(400).send({ msg: "unauthorized" });
    const decode = await jwt.verify(token, config.get("secretToken"));
    const user = await User.findById(decode._id).select("-password");
    if (!user) {
      return res.status(500).send({ msg: "unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ msg: "server error" });
  }
};

module.exports = isAuth;
