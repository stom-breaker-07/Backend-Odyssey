const http = require('http');

const server = http.createServer((req ,res)=>{
    console.log("Hello it is my first backend Server  ");
    // process.exit(); // basically exits from the server aftr response 
});

server.listen(3000);
// initating the Listener in localhost 3000 port ..