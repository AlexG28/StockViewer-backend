//main file for backend 

const Express = require("express");
const app = Express();
const mongoose = require("mongoose");
const port = 3000;
require('dotenv').config();

/*
const importMongoURI = require("./mongo");
const URI = importMongoURI.returnURI();

mongoose.connect(URI, () => {
    console.log("connected to database");
});

mongoose.connect(
    process.env.DB_USER,
    { useNewUrlParser: true },
    () => console.log("connected to database!")
    );
    
*/

mongoose.connect (
    process.env.DB_USER,
    //'mongodb+srv://database1:crazydatabase@maincluster.jnarl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    () => console.log("Connected to database!")
);




const getQuoteRoute = require('./routes/getQuotesRoute');
app.use('/getQuoteRoute', getQuoteRoute);


app.get("/", (req,res) => {
    //res.send("hello world");
    res.json({test: 'This clearly works'});
    console.log("test1");
});

/*

app.get('/getQuoteRoute', (req,res) => {
    res.json({response:"lets try this"});
});

app.listen(port, () => console.log("listening on port " + port));
*/
app.listen(port);