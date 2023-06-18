const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.get("/ById/:id", async (req, res) => {
  const id=req.params.id
  const Post = await Posts.findByPk(id);
  res.json(Post);
});

router.post("/createPost",validateToken, async (req, res) => {
  const post = req.body;
  const userid = req.user.id;
  post.UserId = userid;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;