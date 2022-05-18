// so streaming is use to handle large amounts fo data
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 500, // see how much the bytes need to be rendered
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (result) => {
  console.log(result);
});
