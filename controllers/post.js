const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(404).send({ err });
  }
};

exports.getOnePost = async (req, res) => {
  try {
    const { _id } = req.params;
    const post = await Post.findOne({ _id });
    return res.status(200).send(post);
  } catch (error) {
    return res.status(404).send({ err });
  }
};

exports.addPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body });
    await post.save();
    return res.status(201).send(post);
  } catch (error) {
    return res.status(500).send({ err });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { _id } = req.params;
    const { description } = req.body;
    await Post.updateOne({ _id }, { $set: { description } });
    return res.status(200).send({ msg: "Post updated!" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { _id } = req.params;
    await Post.findOneAndDelete({ _id });
    return res.status(200).send({ msg: "Post deleted!" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
