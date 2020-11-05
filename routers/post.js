const express = require("express");

const router = express.Router();

const postCtrl = require("../controllers/post");
const {
  postValidators,
  errorValidator,
} = require("../middlewares/bodyValidators");

router.get("/", postCtrl.getPosts);
router.get("/:_id", postCtrl.getOnePost);
router.post("/addPost", postValidators(), errorValidator, postCtrl.addPost);
router.put("/:_id", postCtrl.updatePost);
router.delete("/:_id", postCtrl.deletePost);

module.exports = router;
