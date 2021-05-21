// this file should update a stock 


function update(ticker){

    var api_url = process.env.API_URL1 + ticker + process.env.API_URL2;
    console.log("hello");
    return api_url;

}


module.exports = update;