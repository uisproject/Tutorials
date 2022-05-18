const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("homepage");
  }

  if (req.url === "/about") {
    //   this is a blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${j} ${i}`);
      }
    }
    res.end("about");
  }

  res.end("error not found");
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
