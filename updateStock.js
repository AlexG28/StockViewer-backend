// this file should update a stock 
// require (process).config() something like that maybe??????
var fetch = require("node-fetch");

const updatedData = async (ticker) =>  {
    var api_url = process.env.API_URL1 + ticker + process.env.API_URL2;
    
    try {
        const fetched = await fetch(api_url);
        const response = await fetched.json();
        // if either of these are 0, then toFixed doesn't work
        var price = (response.quote.latestPrice).toFixed(2);
        var dailyChange = (response.quote.change).toFixed(4);
        
    } catch (err){
        console.log(err);
    }
    
    var output = {
        "price": price,
        "dailyChange": dailyChange
    };
    
    return output;

};


module.exports = updatedData;