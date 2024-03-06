const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const redisClient = require("./redisClient");

const jwtExpirationTime = 3600 ;
const secretKey = process.env.Secret_Key ;
const loginValidator = async(req,res,next)=>{
       try{
            const { email , pass } = req.body ;
              
            const user = await UserModel.findOne({email});
            console.log(user._id);
            if(!user){
               return res.status(400).send(`User doesn't exits with ${email},Please do signup...`);
            }else{
               const result = await bcrypt.compare(pass,user.pass);
               if(!result){
                  return res.status(400).send({"msg":"Wrong email or password..."});
               }else{
                 const token = jwt.sign({"userID":user._id,"username":user.username,"email":email},secretKey,{"expiresIn":jwtExpirationTime});
                  redisClient.SETEX(user._id.toString(),jwtExpirationTime,token);
                  req.token = token;
                  next();
               }
            }
       }catch(error){
          res.status(500).send(error);
       }
};

module.exports = loginValidator ;