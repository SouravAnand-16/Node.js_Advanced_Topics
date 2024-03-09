const UserModel = require("../model/userModel");

const submitOTP = (req,res,next) => {
     console.log("otp is",req.body.OTP);
     next() ;
};

module.exports = submitOTP ;