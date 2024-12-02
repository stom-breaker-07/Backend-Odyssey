const express=require('express');
const bodyParser =require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('/add-product',(req,res,next)=>{
    console.log("user page -> add product ");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});


app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send("<h1>Home</h1>")
    next();
});



app.listen(3000);

//to use body parser install it using this command in terminal npm install --save body-parser