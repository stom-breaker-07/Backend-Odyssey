const fs = require("fs");
const { buffer } = require("stream/consumers");

const Handelrouter = (req ,res ) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>StromBreaker07</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      console.log(chunks);
      body.push(chunks);
    });
    req.on("end", () => {
      const ColectBody = Buffer.concat(body).toString();
      console.log(ColectBody);
      const message = ColectBody.split("=")[1];
      fs.writeFile("Message.txt", message, () => {
        //use the Write file method to give the saltine output easily without asynchronous
        res.statusCode = 307;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
};


module.exports=Handelrouter;