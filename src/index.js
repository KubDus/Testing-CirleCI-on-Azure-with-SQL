import UserRouter from "./routes/userRouter";
import express from 'express';
import sequelize from "./config/database";
import User from "./models/user";

const app = express();

require('dotenv').config();



app.get("/", (req, res) => {
    res.send("Hi There!!!")
})

app.get("/longer", (req, res) => {
    res.send("Hi there my friend!!!")
})

sequelize.sync({ force: false }).then(async () => {
    await User.create({ username: "Stefan"});
})



app.use(UserRouter);

const port = process.env.PORT

// app.listen(port, () => console.log(`listening on port ${port}`))
app.listen(port, () => console.log(`listening on port ${port}`))