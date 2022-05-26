const express = require("express");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  // when you work with middleware you must pass the 'next' unless you are terminating the whole process with res.send()
  // res.send("Testing");

  next(); // this is how you pass the next

  console.log(method, url, time);
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
