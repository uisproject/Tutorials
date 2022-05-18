const { readFileSync, writeFileSync } = require("fs");

let first = "";
let htmlFile = "";

try {
  first = readFileSync("./content/first.txt", "utf-8"); // read the file
  htmlFile = readFileSync("./content/index.html", "utf8");
  console.log(first, htmlFile);
} catch (error) {
  console.log("hi");
}

// utf-8 is represents encoding of single character in 8 bytes, and it's the default one
// learn more about this here https://blog.hubspot.com/website/what-is-utf-8

writeFileSync("./content/copiedHTML.html", `Here is the result : ${htmlFile}`, {
  flag: "a",
}); // this will write a file or create a file
// the flag 'a' is telling to append the string into the file so it won't be override but appended instead

console.log("done with this task");
console.log("Starting with the next one");
