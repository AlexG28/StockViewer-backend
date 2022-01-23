//main file for backend 

const Express = require("express");
const app = Express();
const mongoose = require("mongoose");
const port = 3001;
require('dotenv').config();
const bodyParser = require("body-parser");

//middleware
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


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

app.post("/test", async (req, res) => {
    //await mongoose.connect(process.env.DB_USER, () => console.log("connected!!!"));
    

    const customerSchema = new mongoose.Schema({name: String, age: Number, email: String});
    const Customer = mongoose.model('Customer', customerSchema);

    await Customer.create({name: 'Alex', age: 19, email: 'alex@gmail.com'});
    await Customer.create({name: 'Noura', age: 20, email: 'noura@gmail.com'});
    //const allCustomers = await Customer.find();
    console.log('I think this worked?????');
});


app.listen(port);