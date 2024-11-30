const { buffer } = require("stream/consumers");

const AsiRouter = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>User page</title></head>");
    res.write(
      '<body><h1>Hi this my Assignment</h1><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const collect = [];
    req.on("data", (chunks) => {
      collect.push(chunks);
      console.log(chunks);
    });
    req.on("end", () => {
      const Raw = Buffer.concat(collect).toString();
      const userInput = Raw.split("=")[1];
      console.log(userInput);
      res.statusCode = 302;

      res.setHeader("Location", "/");
      
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>create-user</title></head>");
      res.write("<body> <h1>User name is: " + userInput + "</h1> </body>");
      res.write("</html>");

      
    });
    return res.end();
  }
};

module.exports = AsiRouter;

{
  /* <html>
        <head>
          <title>User page</title>
        </head>
        <body>
          <h1>Hi this my Assignment</h1>
          <form action="/create-user">
            <input type="text" name="user" id="user" method="POST" />
            <button onclick="submit">Register</button>
          </form>
        </body>
      </html> */
}

//   <html>
//       <head>
//         <title>create-user</title>
//       </head>
//       <body>
//         <h1>user name is : {userInput}</h1>
//       </body>
//     </html>
