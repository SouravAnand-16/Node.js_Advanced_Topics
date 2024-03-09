const Redis = require("redis");

const redisClient =  Redis.createClient({
    host : "redis-15740.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    port : 15740 ,
    Username : "default",
    password : "Pc5yUUWllPKWJWcz1J03HshIYJ9SvTiM"
});

module.exports = redisClient ;