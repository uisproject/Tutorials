const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPeople,
  updatePeople,
  deletePeople,
} = require("../controllers/people");

// first way to make routing
// router
//   .get("/", getPeople)
//   .post("/", createPeople)
//   .put("/:id", updatePeople)
//   .delete("/:id", deletePeople);

// 2nd way to make routing
router.route("/").get(getPeople).post(createPeople);
router.route("/:id").put(updatePeople).delete(deletePeople);

module.exports = router;
