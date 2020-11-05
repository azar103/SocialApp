const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", PostSchema);
