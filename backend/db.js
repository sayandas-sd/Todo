const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://new_user:HxuABJt6tZEF5ThT@cluster0.ufwegv2.mongodb.net/todo_app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    complete: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}