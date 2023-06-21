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
    const createdPost = await Posts.create({ ...post, user_id: userId, username });
    res.json(createdPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/editPost/:id", validateToken, async (req, res) => {
  const postId = req.params.id;
  const { title, description, blogText } = req.body;
  const userId = req.user.id;

  try {
    const post = await Posts.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.user_id !== userId) {
      return res.status(403).json({ error: "You are not authorized to edit this post. Please refer to your created Post to Edit it." });
    }

    // Update the post with the new values
    post.title = title;
    post.description = description;
    post.blogText = blogText;

    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/deletePost/:id", validateToken, async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const post = await Posts.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.user_id !== userId) {
      return res.status(403).json({ error: "You are not authorized to delete this post. Please refer to your created Post to delete it." });
    }

    await post.destroy();

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
