
const express = require("express");
const client = require("./middleware/redisClient")
const cors = require("cors");
require("dotenv").config();
const connection = require("./db");
const userRouter = require("./routes/userRoute");

const app = express();

app.use(express.json(),cors());

app.get("/",(req,res)=>{
    res.status(200).send(`This is a home route`);
});

app.use("/user",userRouter);

app.listen(8080,async()=>{
    await connection ;
    console.log(`Server got connected to db`);
    console.log(`Server is running at http://localhost:${8080}`);
});

