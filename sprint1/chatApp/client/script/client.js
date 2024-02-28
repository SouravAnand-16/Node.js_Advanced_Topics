const socket = io("http://localhost:8080/",{ transports : ["websocket"]});

const title = document.getElementById("title");
const peopleCount = document.getElementById("people-count");
const main = document.getElementById("main");

let user ;

socket.on("welcome",(msg)=>{
    title.textContent = msg ;
});

socket.on("people-count",(count)=>{
    peopleCount.textContent = count ;
});

const enterRoom = document.getElementById("enter-room");

enterRoom.addEventListener("click",()=>{
    socket.emit("setUserName",document.getElementById("user-name").value);
});

socket.on("userExist",(data)=>{
   main.innerHTML = " " ;
   const message = document.createElement("h1");
   message.textContent = data.description ;
   main.append(message);
})
socket.on("setUser",(data)=>{
   console.log(data);
   user = data.userName ;
   main.innerHTML = " " ;
   const div = document.createElement("div");
   const input = document.createElement("input");
   input.setAttribute("id", "input-tag");
   input.setAttribute("placeholder", "Enter your message");

   const messageContainer = document.createElement("div");
   messageContainer.setAttribute("id","message-container");
  
   const button = document.createElement("button");
   button.textContent = "Send" ;

   button.addEventListener("click",sendMessage);

   div.append(input,button,messageContainer);
   main.append(div);
});

socket.on("newMsg",(data)=>{
    const messageContainer = document.getElementById("message-container");
    const div = document.createElement("div");
    const name = document.createElement("b");
    const msg = document.createElement("i");

    name.textContent = `${data.user} :` ;   
    msg.textContent = `${data.message}`;

    name.append(msg);
    div.append(name);
    messageContainer.appendChild(div);
})

function sendMessage(){
    const msg = document.getElementById("input-tag").value ;
    if(msg){
        socket.emit("new-client-message",{"message":msg , "user":user});
    }
}