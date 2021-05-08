const express = require("express");
const router = express.router();
const schema = require('../models/Defaults');

// need one to get back all the categories of stocks (everything)

router.get('/', async (req,res) => {
    try{
        const response = await schema.find();
        res.json(response);
    } catch {
        res.json({message: err});
    }
});





// need one to update stock quotes 








module.exports = router;