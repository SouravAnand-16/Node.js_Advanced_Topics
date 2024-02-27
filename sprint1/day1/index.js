const { WebSocketServer } = require("ws");

const wss = new WebSocketServer( { port : 9000 }) ;

wss.on("connection", (socket)=> {
    console.log("New Client Connected");
    socket.send("Hello form Server");

    socket.onmessage = (event) => {
       if(event.data === "hi"){
          socket.send("Hi..");
       }else if(event.data === "bye"){
          socket.send("Bye Bye..!");
       }else{
          socket.send("Wrong message got");
       }
    }
});

//on client browser 
// const socket = new WebSocket("ws://localhost:9000");
// socket.onopen = ()=> socket.send("hello form the client")
// socket.onmessage = (event) => console.log(event.data);