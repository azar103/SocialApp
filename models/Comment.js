const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    description: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", CommentSchema);
