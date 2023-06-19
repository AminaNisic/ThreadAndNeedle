const express = require('express');
const router = express.Router();
const { Users } = require('../models')
const bcrypt = require('bcryptjs');
const {sign} = require('jsonwebtoken');
const { validateToken } = require('../middleware/AuthMiddleware')

router.post("/register", async (req,res) => {
   const { username, password, email } = req.body
   bcrypt.hash(password, 10).then((hash) => {
    Users.create({
        username: username,
        password: hash,
        email: email,
    })
    return res.json("Successfully registered");
   })
});

router.post('/login', async (req,res) => {
    const {password, email} = req.body;

    const user = await Users.findOne({ where : {email:email}
    });

    if (!user) res.json({ error:"User doesn't exist" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong username and password combination" });
        //add username or email option
        const accessToken = sign({username: user.username, id: user.id}, 
        "bljonkajenajpametnijabljnkaikona");


        res.json(accessToken);
    })

    //accesstoken for testing: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtYXRyb24zMDAwIiwiaWQiOjIsImlhdCI6MTY4Njk4NDg4Nn0.CBCJyLW5qSDdE5j99nKxEw22oW6xbh3e41wa-W_7kmk
})



module.exports = router;