// const Redis = require("redis");

// const redisClient = new  Redis.createClient({
//     host : "redis-15740.c212.ap-south-1-1.ec2.cloud.redislabs.com",
//     port : 15740 ,
//     Username : "default",
//     password : "Pc5yUUWllPKWJWcz1J03HshIYJ9SvTiM"
// });

// redisClient.connect().then(() => {
//     console.log('Connected to Redis');
// }).catch((err) => {
//     console.log(err.message);
// })

// module.exports = redisClient ;
// redisClient.js
// const { createClient } = require('redis');

// const client = createClient();

// client.on('error', err => console.error('Redis Client Error:', err));

// client.on('connect', () => {
//     console.log('Redis client connected successfully');
// });

// module.exports = { createClient };

const { createClient } = require('redis');

const client = createClient({
    host : "redis-15740.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    port : 15740 ,
    Username : "default",
    password : "Pc5yUUWllPKWJWcz1J03HshIYJ9SvTiM"
  });
  
       client.on('error', err => console.log('Redis Client Error:', err)); 
          
       client.on('connect', () => {
              console.log('Redis client connected successfully');
      });

 module.exports = client ;     