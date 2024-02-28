const socket = io("http://localhost:8080/",{ transports : ["websocket"]});

const title = document.getElementById("title");
const peopleCount = document.getElementById("people-count");

socket.on("welcome",(msg)=>{
    title.textContent = msg ;
});

socket.on("people-count",(count)=>{
    peopleCount.textContent = count ;
});