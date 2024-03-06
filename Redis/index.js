const express = require("express");
require("dotenv").config();
const connection = require("./server");
const userRouter = require("./routes/userRoute");
const todoRouter = require("./routes/todoRoute");

const app = express();

app.use(express.json());

app.use("/user",userRouter);
app.use("/todo",todoRouter);

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"This is a home route"});
});

app.listen(8080,async()=>{
    try{
        await connection ;
        console.log(`Server got connected to DB`);
        console.log(`Server is running at http://localhost:${8080}`);
    }catch(error){
        console.log(error);
    }
});