const express = require("express");

const router = express.Router();

const commentCtrl = require("../controllers/comment");
const {
  commentValidators,
  errorValidator,
} = require("../middlewares/bodyValidators");

router.get("/", commentCtrl.getComments);
router.get("/:_id", commentCtrl.getOneComment);
router.post(
  "/addComment",
  commentValidators(),
  errorValidator,
  commentCtrl.addComment
);
router.put("/:_id", commentCtrl.updateComment);
router.delete("/:_id", commentCtrl.deleteComment);

module.exports = router;
