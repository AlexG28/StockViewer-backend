const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const stockCollection = require('../models/Defaults');
const updateStocks = require('../updateStock');

//const categories = ["Banks","Healthcare","Auto","Semicondctor", "Tech"]
const categories = ["Bank", "Healthcare", "Semicondctor", "Automotive", "Tech"];


// get all 
router.get('/', async (req,res) => {    
    //mongoose.set('debug', true);
    console.log("hahahaaaa");
    
    try {
        const posts = await stockCollection.find(); // this line doesn't work 
        res.json(posts);
    }catch{
        res.json({message: err});
    }
    
    res.end();
});


// input the stock category in json and receive the right object
router.get('/:StockCategory', async (req, res) => {
    try {
        const result = await stockCollection.find({ StockCategory: req.params.StockCategory});
        res.send(result);
    }catch (err) {
        res.json({message: err})
    }
});

// add a stock

router.post ('/', async (req,res)=> {
    console.log(req.body.StockCategory);
    console.log(req.body.Stocks[0]);
    const schema1 = new stockCollection ({
        StockCategory: req.body.StockCategory,
        Stocks: req.body.Stocks
    });
    try {
        const savedSchema = await schema1.save();
        res.json(savedSchema);
    } catch {
        res.json({message: err});
    }
});

// format example of how to use this 
// http://localhost:3000/getQuoteRoute/update/Banks/jpm
// updates individual stock 
router.put ('/update/:Category/:ticker', async (req, res) => {
    try {
        const category = await stockCollection.findOne({StockCategory: req.params.Category});
        
        // need to update from req.body to using a different function from this backend itself
        for (var i = 0; i < category.Stocks.length; i++){
            if (category.Stocks[i].ticker == req.params.ticker){
                console.log(category.Stocks[i]);
                category.Stocks[i].price = req.body.price
                category.Stocks[i].dailyChange = req.body.dailyChange
            }   
        }
        const updated = category.save();
        res.json(updated);
        
    } catch (err){
        res.json({message: err});
    }
});


router.put('/updateAll', async(req,res) =>{   
    try{
        for (var j = 0; j < categories.length; j++){
            const category = await stockCollection.findOne({StockCategory: categories[j]});
            var updated;
            var newInfo;
            for (var i = 0; i < category.Stocks.length; i++){
                newInfo = await updateStocks(category.Stocks[i].ticker);
                category.Stocks[i].price = newInfo.price;
                category.Stocks[i].dailyChange = newInfo.dailyChange;
            }
            updated = await category.save();
            //console.log(updated);
        }
        res.json("everything worked");
    } catch (err){
        res.json({message: err});
    }

});

/*
// update all stocks in a category
router.put('/updateAll/:Category', async(req,res) => {
    try {
        const category = await schema.findOne({StockCategory: req.params.Category});
        var updated;
        var newInfo;
        for (var i = 0; i < category.Stocks.length; i++){
            newInfo = await updateStocks(category.Stocks[i].ticker);
            category.Stocks[i].price = newInfo.price;
            category.Stocks[i].dailyChange = newInfo.dailyChange;
        }
        updated = category.save();
        res.json("hello there");

    } catch (err){
        res.json({message: err});
    }
});
*/


module.exports = router;

