const Comment = require("../models/Comment");

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.status(200).send(comments);
  } catch (error) {
    return res.status(404).send({ err });
  }
};

exports.getOneComment = async (req, res) => {
  try {
    const { _id } = req.params;
    const comment = await Comment.findOne({ _id });
    return res.status(200).send(comment);
  } catch (error) {
    return res.status(404).send({ err });
  }
};

exports.addComment = async (req, res) => {
  try {
    const comment = new Post({ ...req.body });
    await comment.save();
    return res.status(201).send(comment);
  } catch (error) {
    return res.status(500).send({ err });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const { _id } = req.params;
    const { description } = req.body;
    await Comment.updateOne({ _id }, { $set: { description } });
    return res.status(200).send({ msg: "Comment updated!" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { _id } = req.params;
    await Comment.findOneAndDelete({ _id });
    return res.status(200).send({ msg: "Comment deleted!" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
