const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String },
    email: { type: String, required: true },
    avatar: {
      type: String,
      default: "https://randomuser.me/api/portraits/women/18.jpg",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
