const mongoose = require('mongoose');


var  Schema = mongoose.Schema;

var someModelSchema = new Schema ({
    StockCategory: String,
    Stocks: [String]

});

var category = mongoose.model('someModel', someModelSchema);
/*
category.find( {StockCategory : StockCategory} , '-_id StockCategory', function(err, category) {
    console.log(category);
});
*/
module.exports = category;

