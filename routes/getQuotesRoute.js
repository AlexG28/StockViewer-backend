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

/*
// get a post by ID 
router.get('/:postId', async (req,res) => {
    try{        
        const post = await schema.findById(req.params.postId);
        res.send(post);
    } catch (err){
        res.json({message: "hahahhahaha"});
    }
});
*/


// need to work on this 
router.get('/:StockCategory', async (req, res) => {
    try {
        //const result = await schema.find(req.params.StockCategory);
        const result = await schema.findOne()
        res.send(result);
    }catch (err) {
        res.json({message: err})
    }
});

/* Useful videos and ideas 
    https://www.youtube.com/watch?v=fgTGADljAeg
    https://mongoosejs.com/docs/api.html#model_Model.find
    https://thecodebarbarian.com/how-find-works-in-mongoose.html
*/


module.exports = router;





