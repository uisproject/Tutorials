const express = require("express");
const router = express.Router();

// import built-in middleware
const { authorize2 } = require("../authorize");

router.post("/login", authorize2, (req, res) => {
  const { name } = req.user;
  res.status(200).send({ status: "success", data: { name } });
});

module.exports = router;
