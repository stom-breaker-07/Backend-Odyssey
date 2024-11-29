const http = require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url , req.headers , req.method); //it will give the basic info of the url and server header and menthod
});

server.listen(3000);

//please us ctrl+c to end server :