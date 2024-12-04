const express= require('express');

const bodyParser = require("body-parser");
const path=require('path');

const router=express.Router();

router.use(bodyParser.urlencoded({extended:false}));

router.get('/products',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-product.html"));
    
});

router.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;