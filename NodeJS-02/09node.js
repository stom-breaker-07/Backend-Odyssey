const http = require("http");
const router = require('./router09');

const server = http.createServer(router) ;
  
server.listen(3000);
//Here we separated the server and the actual file to route file
//By dividing the two content into two parts one in 08node js and another one in router08.JS


//this is noting but about the pakages and the installation of third praty pakages 
//npm init , npm install nodemon --save-dev (this help in auto comiling part )