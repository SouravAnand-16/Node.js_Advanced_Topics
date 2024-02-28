const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express() ;

app.use(express.json(),cors());
let count = 0 ;

//creating http server because socket can only accepts http as it parameter
const httpServer = http.createServer(app) ;

//creating io object using Server class 
const io = new Server(httpServer) ;

app.get("/",(req,res)=>{
    res.send({"msg":"This is home route"}) ;
});

httpServer.listen(8080) ;

//connection is predefined events at socket.io module
io.on("connection",(socket)=>{
    console.log("New Client Connected");
    count++;
    console.log(`Total client : ${count}`);
     
    //when someone connect socket the server will emit "welcome" events 
    socket.emit("welcome","Hello from the Server");

    // "io.emit" : is a method in socket.io module which typically send events to all the client/socket including the current client/socket
    io.emit("count-people-online",count);

    // "disconnet" is a predefined events , when socket/clienmt gets disconnected
    socket.on("disconnect",()=>{
        count--;
        console.log(`Client disconnected and total client : ${count}`);

        // "broadcast.emit" is a method in socket.io module which send events to all the client/socket excluding the current socket/client
        socket.broadcast.emit("count-people-online",count);
    })
});
