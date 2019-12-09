const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Todo = mongoose.model('Todo');

require('./app_api/models/Todo');


const writeTodoModelListToPersist = (Todo_list) => {

    //pull connection string from environment variable
    const uri = process.env.MONGODB_ATLAS_URL;

    //this example uses ES6 template literals for string interpolation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
            .catch(err => console.log(err));
   
    //insert the most recent list - https://mongoosejs.com/docs/api/model.html#model_Model.insertMany
    var promise = Todo.insertMany(Todo_list, (err, docs) => {
        if(!err){
            console.log(`INSERTED: ${Todo_list.length} records`);
        }else{
            console.log(err);
        }
    });
}

const createTodosModel = (Todos) => {
    return {
        id: Todos.id,
        name: Todos.title,
        done: Todos.completed
        
    }
};

const parseTodo = (data) => {

    let TodoModelList = [];        
    data.forEach(item => {TodoModelList.push(createTodosModel(item)); })

    writeTodoModelListToPersist(TodoModelList);
 }


  //  console.log("WRITING TO DB " + new Date().toTimeString());    



const task = cron.schedule('*/80 * * * *', () => {

   axios.get('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => {console.log("Data Passed"+response.data)
        parseTodo(response.data);
    })
    .catch( (error) => {
        console.log(error);
    });

    },{
        scheduled: false
    }
);

module.exports = task;