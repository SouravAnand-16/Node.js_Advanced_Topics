// import events from Node.js 
const { EventEmitter } = require("events") ;

// create custom event ;
const Student = new EventEmitter() ;

// defining what should happen when event is triggered || handling  the event when its get triggered
Student.on("raiseHand", ()=> {
    console.log("Unmute Student") ;
}) ;

// emitting the  raiseHand event
Student.emit("raiseHand") ;
