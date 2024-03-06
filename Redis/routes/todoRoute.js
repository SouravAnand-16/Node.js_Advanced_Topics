const express = require("express");
const TodoModel = require("../model/todoModel");
const auth = require("../middleware/auth");
const checkBlacklisted = require("../middleware/checkBlacklisted");

const todoRouter = express.Router();

todoRouter.get("/",auth,checkBlacklisted,(req,res)=>{
    res.status(200).send("Fetching todo");
});

todoRouter.post("/create",auth,(req,res)=>{
    console.log(req.body);
    res.status(200).send("Created new todo");
});

module.exports = todoRouter ;