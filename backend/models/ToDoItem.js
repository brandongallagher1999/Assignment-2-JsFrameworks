const Schema = require("mongoose").Schema;

const ToDoItemSchema = new Schema({
    name : {
        required : true,
        type : String
    },
    description : {
        required : true,
        type : String,
    },
    date : {
        required : true,
        type : String
    }
});

module.exports = ToDoItemSchema;