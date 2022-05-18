const http = require("http");

const server = http.createServer((req, res) => {
  // creating server

  // requesting something
  console.log(req);

  if (req.url === "/") {
    res.end("welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("here is our short history");
  }

  //   write something or sending response
  // res.write("welcome to our home page");
  res.end("<h1>Oops</h1>");
});

server.listen(5000); // creating port 5000
