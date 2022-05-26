const express = require("express");
const app = express();
const { authorize2 } = require("./authorize");

const { people, products } = require("../data");

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // when you send() it will automatically become JSON

app.get("/api/people", (req, res) => {
  res.status(200).json({
    status: "success",
    data: people,
  });
});

app.get("/api/products", (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
  });
});

app.post("/login", authorize2, (req, res) => {
  const { name } = req.user;
  res.status(200).send({ status: "success", data: { name } });
});

app.put("/api/people/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  console.log(id);
  console.log(name);

  const foundData = people.find((person) => person.id === Number(id));

  if (!foundData) {
    return res.status(404).json({ success: false, msg: "Name is not found" });
  }

  foundData.name = name;
  res.status(200).json({
    success: true,
    data: foundData,
    msg: "Name is successfully updated",
  });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;

  const deletedData = people.find((person) => person.id === Number(id));

  if (!deletedData) {
    return res.status(404).json({ success: false, msg: "Id is not found" });
  }

  const updatedData = people.filter((person) => {
    return person.id != Number(id);
  });

  console.log(updatedData);

  res.status(200).json({
    success: true,
    data: {
      updatedData,
      deletedData,
    },
    msg: "Name is successfully updated",
  });
});

app.listen(5000, () => {
  console.log("listening to 5000");
});
