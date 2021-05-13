//main file for backend 

const Express = require("express");
const app = Express();
const mongoose = require("mongoose");
const port = 3000;
require('dotenv').config();
const bodyParser = require("body-parser");

//middleware
app.use(bodyParser.json());

mongoose.connect (
    process.env.DB_USER,
    () => console.log("Connected to database!")
);


const getQuoteRoute = require('./routes/getQuotesRoute');
app.use('/getQuoteRoute', getQuoteRoute);


app.get("/", (req,res) => {
    //res.send("hello world");
    res.json({test: 'This clearly works'});
    console.log("test1");
});


app.listen(port);