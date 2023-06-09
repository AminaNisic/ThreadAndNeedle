const express = require("express");
const router = express.Router();
const { Forums } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

//get request with nicer formating hehe

router.get("/getForums", async (req, res) => {
  const listOfForums = await Forums.findAll();
  res.json(listOfForums);
});

router.get("/getForums/ById/:id", async (req, res) => {
    const id=req.params.id
    const forumPost = await Forums.findByPk(id);
    res.json(forumPost);
});

router.post("/createForumPost", async (req, res) => {
  const post = req.body;
  await Forums.create(post);
  res.json(post);
});

module.exports = router;