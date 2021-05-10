const express = require("express");
const router = express.Router();
const schema = require('../models/Defaults');

// need one to get back all the categories of stocks (everything)

router.get('/', async (req,res) => {
    //res.send('we are on posts');
    try {
        const posts = await schema.find();
        res.json(posts);
    }catch{
        res.json({message: err});
    }
});

/*
router.post( '/', async (req,res) => {

});
*/
module.exports = router;