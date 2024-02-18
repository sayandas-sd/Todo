const express = require("express");
const { createTodo, updateTodo } =require("./validate");
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "wrong information"
        })
        return;
    }

    /*await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        complete: false
    })*/
    res.json({
        msg: "Todo created succesfully"
    })
});

app.get("/todos", async function(req,res){
    //const todos = await todo.find({});
    res.json({
        todos: []
    })
});

app.put("/complete", async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    
    if(!parsePayload.success){
        res.status(411).json({
            msg: "wrong information"
        })
        return;
    }
    await todo.update({ 
        _id: req.body.id
    },{
        complete: true
    })

    res.json({
        msg: "Todo updated"
    })
});

app.listen(3000);