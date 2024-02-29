const express = require("express");
const http = require("http");
const { dirname } = require("path");
const { Server } = require("socket.io");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const client_id = "2469dfb1822e95d6a40b" ;
const client_secret = "dc84728dce8082dd5996afa97a3a4da699f6d825";

const app = express() ;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"This is a home route"});
});

//redirect to html page where button is present for Oauth (login with github)
app.get("/login-with-github",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

//once the user click on button he will be redirect to github .
//github will authorize the user and in the response it will apeend code along with our configured callback URL
app.get("/auth/github",async(req,res)=>{
    const code = req.query.code ;
  try{
      const response = await  fetch(`https://github.com/login/oauth/access_token`,{
        method : "POST",
        headers : {
           "Content-Type" : "application/json",
           "Accept" : "application/json"
        },
        body : JSON.stringify({
           client_id,
           client_secret,
           code
        })
    });
    const data = await response.json() ;
    const accessToken = data.access_token ;
    console.log(`Access_Token is : ${accessToken}`);

    const res = await fetch(`https://api.github.com/user`,{
        headers : {
            "Authorization" : `Bearer ${accessToken}`
        }
    })
    const userData = await res.json();
    console.log(userData);
  }catch(error){
    console.log(error);
  } 
  res.send(`Github callback URL & code is : ${code}`);
   
})



const httpServer = http.createServer(app) ;
const io = new Server(httpServer) ;

io.on("connection",(socket)=>{
    console.log("New Client Connected");

    socket.on("disconnect",()=>{
        console.log("Client got disconnected");
    });
})

app.listen(8080,()=>{
    console.log(`Server is running at http://localhost:${8080}`);
});