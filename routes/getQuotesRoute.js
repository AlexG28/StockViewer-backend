const express = require("express");
const router = express.Router();
const schema = require('../models/Defaults');

// need one to get back all the categories of stocks (everything)

router.get('/', async (req,res) => {    
    try {
        const posts = await schema.find();
        res.json(posts);
    }catch{
        res.json({message: err});
    }
});

// get a post by ID 
router.get('/:postId', async (req,res) => {
    try{        
        const post = await schema.findById(req.params.postId);
        res.send(post);
    } catch (err){
        res.json({text:"this is a failure"});
        //res.json({message: err});
    }
});

// FUTURE TODO:
// need to get cateogires of stocks by their name such as 'bank', 'tech', 'auto' and so on 



/*
// adding a stock category for testing purposes 
router.post('/', async (req,res) => {
    //console.log(req.body);
    const post = new schema ({
        StockCategory: req.body.StockCategory,
        Stocks: req.body.Stocks
    });

    try{       
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err){
        res.json({message: err});
    }
});
*/

module.exports = router;