const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.get("/ById/:id", async (req, res) => {
  const id=req.params.id
  const Post = await Posts.findByPk(id);
  res.json(Post);
});

router.post("/createPost", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;