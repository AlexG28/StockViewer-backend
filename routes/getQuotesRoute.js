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


module.exports = router;





