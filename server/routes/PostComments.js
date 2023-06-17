const express = require("express");
const router = express.Router();
const { PostComments } = require("../models");


router.get("/:postId", async (req, res) => {
  const postId = req.params.postId
  const postComments = await PostComments.findAll({ where: { PostId: postId }});
  res.json(postComments);
});

router.post("/", async (req, res) => {
  const postComment = req.body;
  await PostComments.create(postComment);
  res.json(postComment);
});

module.exports = router;