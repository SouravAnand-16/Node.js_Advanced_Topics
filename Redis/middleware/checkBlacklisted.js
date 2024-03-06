const redisClient = require("./redisClient");

const checkBlacklisted = async(req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
     const value = await redisClient.get(`Blacklisted_${token}`);
     console.log(value);
     if(value){
        return res.status(400).send(`Token blacklisted`);
     }
     next();
  };

  module.exports = checkBlacklisted ;