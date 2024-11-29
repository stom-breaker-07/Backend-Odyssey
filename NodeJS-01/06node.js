//Getting the Request from the html page as a text and the response in the message txt

const http = require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');

const server = http.createServer((req ,res)=>{
    const url =req.url;
    const method = req.method;
   

    if(url ==="/"){
        res.write('<html>');
        res.write('<head><title>StromBreaker07</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    
    if(url==="/message" && method==="POST"){
        const body=[];
        req.on('data',(chunks)=>{  // Here we did this for fetching the data as it is rendered as a small piecs of chunks in the stream 
            console.log(chunks);   //so for Getting each and every pieces i use this function
            body.push(chunks);     //You can also see the each chunks in your terminal
        });
        req.on('end',()=>{
            const ColectBody=Buffer.concat(body).toString();  //These function is to end the fetching of data and initialize it to a single string
            console.log(ColectBody);
            const message=ColectBody.split('=')[1];  //You can see the contaminated answer in the terminal and this line is to get the String under one variable
            fs.writeFileSync("Message.txt",message); //This line is used to write whatever message you have put in that box to the message txt file.
        });
        res.statusCode=307; 
        res.setHeader('location','/'); 
        return res.end();
    }
    
    
});

server.listen(3000);