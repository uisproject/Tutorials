const express = require("express");
const path = require("path");

const app = express();

// use is to setup static and middleware
app.use(express.static("./public")); // this is important if you want to read static folder

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html")); // so if you are sending html make sure to sendFile instead of only send
// });

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("listening to 5000");
});
