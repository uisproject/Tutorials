const express = require("express");
const router = express.Router();

const { products } = require("../../data");

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
  });
});

module.exports = router;
