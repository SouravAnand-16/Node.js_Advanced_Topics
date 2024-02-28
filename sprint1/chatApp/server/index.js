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

httpServer.listen(8080);

let count  = 0 ;
io.on("connection",(socket)=>{
    console.log("New client connected");
    count++;
    socket.emit("welcome","Welocome to Chat App");
    io.emit("people-count",count);

    socket.on("disconnect",()=>{
        console.log("New client disconnected");
        count--;
        socket.broadcast.emit("people-count",count);
    });
});


