const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');


const todos = (req, res) => {
    console.log(req.params.id);
    const ListId = req.params.id;

    Todo.find(
        {
            id: ListId,
        },
        //callback
        (err, docs) => {
            //send records back
            if(!err){
                res.send(docs);
            }else{
                res.send(err);
                console.log(err);
            }
        }
    );    

}

module.exports = {
  todos,
};