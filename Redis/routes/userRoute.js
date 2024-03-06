const express = require("express");
const registerValidator = require("../middleware/registerValidator");
const loginValidator = require("../middleware/loginValidator");
const userRouter = express.Router();
const redisClient = require("../middleware/redisClient");
const auth = require("../middleware/auth");

userRouter.get("/",(req,res)=>{
    res.status(200).send(`fetching all the user`);
});

userRouter.post("/login",loginValidator,(req,res)=>{
    res.status(200).send({"token":req.token});
});

userRouter.post("/signup",registerValidator,(req,res)=>{
    res.status(200).send({"msg":"User registration success"});
});

userRouter.post("/logout",async(req,res)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(token){
        await redisClient.set(`Blacklisted_${token}`, "true");
        res.status(200).send({"msg":"Logout success"});
    }else{
        res.status(400).send(`Token required`);
    }
})

userRouter.get("/home",auth,(req,res)=>{
    res.status(200).send("success");
})

const checkToken = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
     
}

module.exports = userRouter ;