//Libraries
let express = require('express');
let router = express.Router();
const mongoose = require("mongoose");

const mongooseKey = require("../config.json").mongoose; //mongoose connection string


//Setup Connection
let dbConnection = mongoose.createConnection(mongooseKey, {useNewUrlParser : true});


//Schemas
const ToDoItemSchema = require("../models/ToDoItem");

//DB Connections
let ToDoItem = dbConnection.model("ToDoItem", ToDoItemSchema, "ToDoList");


//Routes

//POST: /api/item/create/
//ToDoItem: JSON
router.post("/items/create", (req, res) => {
    console.log(req.body);
    let tempItem = new ToDoItem(req.body);
    try
    {
        tempItem.save();
        res.status(200).send("Item Saved!");
    }
    catch (e)
    {
        res.status(500).send({ message: "Could not create user.", user : req.body});
    }


});

//GET: /api/items/all
router.get("/items/all", (req, res) => {
    try
    {
        ToDoItem.find({}, (err, docs) => {
            res.status(200).send(JSON.stringify(docs));
        });
    }
    catch (e)
    {
        res.status(500).send({ message : "Could not retrieve users."});
    }

});

//PUT /api/items/update
router.put("/items/update", (req, res) => {
    //let tempItem = new ToDoItem(req.body);
    
    console.log(req.body);
    try
    {   
        ToDoItem.findByIdAndUpdate({_id :req.body.id }, {name : req.body.name, description: req.body.description, date: req.body.date});
        res.status(200).send({ message : `Update user ${req.body.id}`});
    }
    catch (e)
    {
        console.log(e);
        res.status(500).send({ message : `Failed to update user.`});
    }
    
});

//DELETE /api/items/delete/{id}
router.delete("/items/delete/:id", (req, res) => {

    try
    {
        ToDoItem.findByIdAndDelete({_id : req.params.id}, err => { 
            if (err)
            {
                console.log(err);
            }
            else{
                console.log("oay");
            }
        });
        res.status(200).send({ message : `Delete user ${req.params.id}`});
    }
    catch (e)
    {
        res.status(500).send({ message : `Failed to delete user.`});
    }
});


module.exports = router;