const fs = require("fs");
console.log("starting first task");
fs.readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  console.log("Completed First task");
});
console.log("starting next task");
