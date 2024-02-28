const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express() ;
app.use(express.json(),cors());

const httpServer = http.createServer(app) ;

const io = new Server(httpServer) ;

app.get("/",(req,res)=>{
    res.send({"msg":"This is home route"});
});

httpServer.listen(8080,()=>{
    console.log(`Server is listening at http://localhost:${8080}`);
});

let user = [] ;
io.on("connection",(socket)=>{
    console.log("New client connected");
    socket.on("setUserName",(data)=>{
        console.log(data);
        if(user.indexOf(data) > -1){
           socket.emit("userExist",{"description":`User already exits with ${data}`});
        }else{
            user.push(data);
            socket.emit("setUser",{"userName" : data});
        }
    });

    socket.on("disconnect",()=>{
        console.log("New client disconnected");
    });

    socket.on("new-client-message",(data)=>{
        console.log(data);
        io.sockets.emit("newMsg",data);
    })
});


