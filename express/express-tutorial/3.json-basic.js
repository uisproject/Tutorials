const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const data = [
    {
      name: "louis",
      age: 22,
    },
    {
      name: "lala",
      age: 25,
    },
  ];

  res.json(data);
});

app.listen(5000, () => {
  console.log("listening to 5000");
});
