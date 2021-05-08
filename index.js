//main file for backend 

const Express = require("express");
const app = Express();
const mongoose = require("mongoose");
const port = 3000;


const importMongoURI = require("./mongo");
const URI = importMongoURI.returnURI();

//connect to Database 
mongoose.connect(URI, () => {
    console.log("connected to database");
});


app.get("/", (req,res) => {
    res.send("hello world");
})


app.listen(port, () => console.log("listening on port " + port));

//app.listen(port);