const express = require("express");
const router = express.Router();
const { ForumComments } = require("../models");


router.get("/:forumId", async (req, res) => {
  const forumId = req.params.forumId
  const forumComments = await ForumComments.findAll({ where: { ForumId: forumId }});
  res.json(forumComments);
});

router.post("/", async (req, res) => {
  const forumComment = req.body;
  await ForumComments.create(forumComment);
  res.json(forumComment);
});

module.exports = router;