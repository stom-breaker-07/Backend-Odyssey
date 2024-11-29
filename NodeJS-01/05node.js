const http = require('http');
const fs=require('fs');

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
        fs.writeFileSync("Message.txt","Writing");//creating the new txt file and writting some thing to it
        res.statusCode=307; //setting the statuscode to 307 number
        res.setHeader('location','/');//readirect in to path / 
        return res.end();
    }
    
    
});

server.listen(3000);