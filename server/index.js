const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./models')

app.use(express.json());
app.use(cors());

//routers

const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter);

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

//

db.sequelize.sync().then(()=> {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
})
   

