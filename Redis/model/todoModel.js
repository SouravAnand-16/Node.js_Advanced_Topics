const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title : {
        type : String
    },
    body : {
        type : String
    },
    auhtor : {
        type : String
    },
    userID : {
        type : String
    }
},{
    vresionKey : false
});

const TodoModel = mongoose.model("todo",todoSchema);

module.exports = TodoModel ;