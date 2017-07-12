const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({

        title: {type: String, required: true}, 
        order: {type: Number, required: true}, 
        completed: {type: Boolean, default: false}
    
});

const Todos = mongoose.model('Todos', todosSchema);

module.exports = Todos;