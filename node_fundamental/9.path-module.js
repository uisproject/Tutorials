const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt"); // creating path
console.log(filePath);

const base = path.basename(filePath); // targeting the base path of file in filePath
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt"); // creating absolute path
console.log(absolute);
