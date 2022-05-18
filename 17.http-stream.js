const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");

    fileStream.on("open", () => {
      fileStream.pipe(res); // so instead of doing res.end() we can use pipe and deliver the readStream to writeStream to it, you can use this when you use createReadStream method
    });

    fileStream.on("error", (error) => {
      res.end(err);
    });
  })
  .listen(5000);
