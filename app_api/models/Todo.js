const mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*const createTodosModel = (Todos) => {
    return {
        id: Todos.id,
        name: Todos.title,
        done: Todos.completed
        
    }
};*/
const TodoSchema = mongoose.Schema({
    id: Number,
    name: String,
    done: String
});

mongoose.model('Todo', TodoSchema);

//const Client = mongoose.model('Client', clientSchema);