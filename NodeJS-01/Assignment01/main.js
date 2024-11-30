const http = require("http");

const ser =require('./routerAss');

const server = http.createServer(ser) ;
  
server.listen(3000);