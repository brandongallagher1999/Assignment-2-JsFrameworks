const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Username : {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Firstname : {
        type : String,
        required : false
    },
    LastName : {
        type : String,
        required : false
    },
    Role : {
        type : String,
        required : true
    },
    Token : {
        type : String,
        required : false
    }
    
});


module.exports = UserSchema;