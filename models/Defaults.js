/*
this is responsible for the framework of how each individual stock is going to be stored 

*/

const mongoose = require('mongoose');

const DefaultSchema = mongoose.Schema({

    StockCategory: { // banks, tech, auto, semiconductor......

        type:String,
        required:true
    },

    Stocks: {

        type:Array, 
        required:true

        // for example, for tech this would look something like this 
        // ['aapl', 'goog', 'amzn', 'nvda', 'intc'] 
    }

})


module.exports = mongoose.model('Defaults', DefaultSchema);