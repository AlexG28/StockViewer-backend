const express = require("express");
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
        const result = await schema.find({ StockCategory: req.body.StockCategory});
        res.send(result);
    }catch (err) {
        res.json({message: err})
    }
});

module.exports = router;





