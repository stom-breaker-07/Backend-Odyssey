//Creating the HTML as a responce 
const http = require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>StromBreaker07</title></head>');
    res.write('<body><h1>Hello from servers html</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(3000);

// The following article provides a great overview of available headers and their role:
//  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers