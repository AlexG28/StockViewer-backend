//main file for backend 
// installed packages: 
// -express 

const Express = require("express");
const app = Express();
const mongoose = require("mongoose");
const port = 3000;

//console.log("hello world");

const importMongoURI = require("./mongo");
const URI = importMongoURI.returnURI();


app.get("/", (req,res) => {
    res.send("hello world");
})


app.listen(port, () => console.log("listening on port " + port));

app.listen(port);