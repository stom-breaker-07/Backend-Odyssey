const express=require('express');

const app=express();

app.use('/',(req,res,next)=>{
    console.log("This page Always Exc done:");
    next();
});



app.use('/users',(req,res,next)=>{
    console.log("user page Exc done!");
    res.send("<h1>Hi it's Express User Page Welcome!</h1>");
});


app.use('/',(req,res,next)=>{
    console.log("main page Exc done:");
    res.send("<h1>Hi it's Express Page Welcome!</h1>");
});



app.listen(3000);