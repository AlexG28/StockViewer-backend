const mongoose = require('mongoose');
var  Schema = mongoose.Schema;


var updatedModel = new Schema ({
    StockCategory: String,
    Stocks: [
        {
            ticker: String,
            companyName:String,
            price: Number,
            dailyChange: Number
        }
    ]
});
// need to work on this schema and figure out how it actually works 


var category = mongoose.model('someModel', updatedModel);

module.exports = category;

