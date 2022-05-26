const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// agenda
// 1. how to setup middleware with use()
// 2. how to setup multiple middleware with use()
// 3. using middleware library

// app.use("/api", logger); // so traditionally you need to pas the logger to all router but if you don't want to do that you can do this instead

// app.use("/api", logger); // another interestingly you can put things like this to specify which router that you want to use specific middleware, and that router and every nested of that route will use the middleware,
// //  for the one not using the route the middleware won't be applied

// app.use("/api", [logger, authorize]); // setup multiple middleware
app.use(morgan("tiny")); // example of using middleware library

// app.get("/", logger, (req, res) => { // like this traditionally if you don't want to pass logger to every route just use use
//   res.send("home");
// });

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("listen to 5000");
});
