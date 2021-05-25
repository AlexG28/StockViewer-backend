// this file should update a stock 
// require (process).config() something like that maybe??????


const newURL = (ticker) => {
    var api_url = process.env.API_URL1 + ticker + process.env.API_URL2;
    
    console.log(api_url);
    var output = {
        "price": 121.11,
        "dailyChange": -5.44
    };

    return output;

};


module.exports = newURL;