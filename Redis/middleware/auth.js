const jwt = require("jsonwebtoken");
const redisClient = require("./redisClient");

const auth = async(req,res,next)=>{
    try{
        const token = req.headers.authorization?.split(" ")[1] ;
        if(!token){
            return res.status(400).send(`Token required...`);
        }else{
            const decode = jwt.verify(token,process.env.Secret_Key);
            req.body.userID = decode.userID ;
            req.body.author = decode.username ; 
            next();
            // redisClient.get(token,(err,reply)=>{
            //     if(err || !reply){
            //         return res.status(400).send("Invalid token");
            //     }
            //     redisClient.get(`Blacklisted_${token}`,(err,reply)=>{
            //         if(reply){
            //             return res.status(400).send("Token blacklisted...");
            //         }else{
                     
            //         }
            //     })
            // })
        }
    }catch(error){

    }
};

module.exports = auth ;