const express = require("express");
const {sendEmail} = require("./emailConfig");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send(`This is a home route`);
});

app.post("/login", (req,res)=>{
    const { email } = req.body ;
    sendEmail(email,"sauravanand324@gmail.com","using sendEmail function","First email using node.js");
    res.status(200).send(`Email sent`);
});

app.listen(8080,()=>{
    console.log(`Server is running at http://localhost:${8080}`);
});