const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const registerValidator = async(req,res,next)=>{
    try{
        const { email , pass } = req.body ;

        const user = await UserModel.findOne({email});
        console.log(user);
        if(user){
            res.status(400).send(`User already exits with ${email}.Please do login...`);
        }else{
           const hash = bcrypt.hashSync(pass,5);
           const newUser = new UserModel({...req.body,pass:hash});
           await newUser.save();
           next();
        }
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
};

module.exports = registerValidator ;