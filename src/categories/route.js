const express = require("express");
const {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("./controller");
const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.get("/:id", getCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);
module.exports = router;
