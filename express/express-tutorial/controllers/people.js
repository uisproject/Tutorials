const { people } = require("../../data");

const getPeople = (req, res) => {
  res.status(200).json({
    status: "success",
    data: people,
  });
};

const createPeople = (req, res) => {
  const { name } = req.body;
  res.status(200).json({ success: true, data: { name: name } });
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
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
};

module.exports = { getPeople, createPeople, updatePeople, deletePeople };
