const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const schema = require('../models/Defaults');

// get all 
router.get('/', async (req,res) => {    
    try {
        const posts = await schema.find();
        res.json(posts);
    }catch{
        res.json({message: err});
    }
});


// input the stock category in json and receive the right object
router.get('/:StockCategory', async (req, res) => {
    try {
        const result = await schema.find({ StockCategory: req.params.StockCategory});
        res.send(result);
    }catch (err) {
        res.json({message: err})
    }
});

// add a stock

router.post ('/', async (req,res)=> {
    console.log(req.body.StockCategory);
    console.log(req.body.Stocks[0]);
    const schema1 = new schema ({
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

// instead of updating individual stocks, update all of them at the same time ?????????

router.put('/update/:category', async (req, res) => {

    try {
        const filter = {StockCategory: req.params.category};
        //const update = // using another file, get the json data to update 
        const update = {
            Stocks: [{
                ticker: 'jpm',
                companyName: 'JP Morgan Chase',
                price: 666.0,
                dailyChange: 6.66
            }, {
                ticker: 'bac',
                companyName: 'Bank Of America',
                price: 777.0,
                dailyChange: 7.77
            }]
        };
        const update2 = {$set: {update}};
        let variable = await schema.updateOne(filter, update2);
        //let variable2 = await schema.update(filter, update2);
        res.json(update2);
        //res.json(variable);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;





