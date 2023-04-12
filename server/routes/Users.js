const express = require('express');
const router = express.Router();
const { Users } = require('../models')
const bcrypt = require('bcrypt');

const {sign} = require('jsonwebtoken');

router.post("/", async (req,res) => {
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


         return res.json(accessToken);
    })
})

module.exports = router;