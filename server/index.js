const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();

const db = require('./models')

app.use(express.json());
app.use(cors());

//routers

const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter);

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const forumRouter = require("./routes/Forums");
app.use("/forums", forumRouter);

const postCommentRouter = require("./routes/PostComments");
app.use("/postcomments", postCommentRouter);

const forumCommentRouter = require("./routes/ForumComments");
app.use("/forumcomments", forumCommentRouter);

//.listen(process.env.PORT || 5000)
//const port = process.env.PORT || 3000;
db.sequelize.sync().then(()=> {
    app.listen(process.env.PORT || 3001, () => {
        console.log("Server running on port ");
    });
})
   

