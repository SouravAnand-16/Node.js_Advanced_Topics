const { Redis } = require("ioredis");
const { Queue } = require('bullmq');
const { log } = require('console');

const redis = new Redis({
    host : "redis-15740.c212.ap-south-1-1.ec2.cloud.redislabs.com" ,
    port : 15740 ,
    User : "default",
    password : "Pc5yUUWllPKWJWcz1J03HshIYJ9SvTiM",
    maxRetriesPerRequest : null 
});

const emailNotification = new Queue("email-queue",{connection : redis});

const addEmailJob = async(email,message) => {
      try {
        const result = await emailNotification.add("email-queue",{email,message});
        console.log(`Email notification job added for ${email} and result is :  ${JSON.stringify(result.data.email)}`);
      }catch(error) {
        console.error(`Error adding email job for ${email}: ${error.message}`);
      }
};

addEmailJob('recipient@example.com', 'This is a test email message');



