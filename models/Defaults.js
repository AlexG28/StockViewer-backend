const mongoose = require('mongoose');


var  Schema = mongoose.Schema;

var someModelSchema = new Schema ({
    StockCategory: String,
    Stocks: [String]

});

var someModel = mongoose.model('someModel', someModelSchema);
module.exports = someModel;

