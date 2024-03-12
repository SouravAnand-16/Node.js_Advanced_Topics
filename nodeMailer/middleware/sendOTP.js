const UserModel = require("../model/userModel");
const { sendEmail } = require("../emailConfig");
const generateOTP = require("./generateOTP");
const client = require("./redisClient");

const sendOTP = async(req,res,next)=>{
  try{  
        const { email } = req.body ;

        const user = await UserModel.findOne({email});

        if(user){
            return res.status(400).send(`User already exist with ${email}.Please do login...`);
        }
        const otp = generateOTP(6);
            sendEmail(email, "sauravanand324@gmail.com", "nodemailer practice using redis", `OTP for registration for testing nodemailer ${otp}`);
             console.log("Redis server got called");
             await client.SETEX(email,120,otp);
            next(); 
  }catch(error){
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = sendOTP ;