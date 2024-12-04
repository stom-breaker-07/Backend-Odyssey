const express =require("express");
const path=require('path');

const admin =require("./Routers/admin");
const shop =require("./Routers/shop");


const app=express();

app.use('/admin',admin);

app.use(shop);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","error.html"));
});



app.listen(3000);