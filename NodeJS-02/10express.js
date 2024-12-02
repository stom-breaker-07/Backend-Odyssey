const express= require('express');

const app=express();

app.use((req,res,next) => {
    console.log("Hi");
    next();
});

app.use((req,res,next) => {
    console.log("Hello");
    res.send("<h1>Govinda</h1>");
});

app.listen(3000);