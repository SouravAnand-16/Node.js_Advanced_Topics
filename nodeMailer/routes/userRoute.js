const express = require("express");
const sendOTP = require("../middleware/sendOTP");
const submitOTP = require("../middleware/submitOTP");
const userRouter = express.Router();

userRouter.post("/sendOTP",sendOTP,(req,res)=>{
    res.status(200).send({"msg":`OTP sent to your mail...`});
});

userRouter.post("/submitOTP", submitOTP,(req,res) => {
    res.status(200).send({"msg":"OTP is submitted"});
});

module.exports = userRouter ;
