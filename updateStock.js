// this file should update a stock 
// require (process).config() something like that maybe??????

function update(ticker){

    var api_url = process.env.API_URL1 + ticker + process.env.API_URL2;
    console.log(ticker);
    console.log(api_url);
    return api_url;

}

const newURL = (ticker) => {
    var api_url = process.env.API_URL1 + ticker + process.env.API_URL2;
    console.log(ticker);
    console.log(api_url);
    return api_url;

};


module.exports = newURL;