const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.get("/ById/:id", async (req, res) => {
  const id = req.params.id;
  const Post = await Posts.findByPk(id);
  res.json(Post);
});

router.post("/createPost", validateToken, async (req, res) => {
  const post = req.body;
  const userId = req.user.id;
  const username = req.user.username;

  try {
    const createdPost = await Posts.create({ ...post, UserId: userId, username });
    res.json(createdPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
