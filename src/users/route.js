const express = require("express");
const { uploadFile } = require("../utils/helper");
const { login } = require("./auth/index");
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("./controller");
const router = express.Router();

router.get("/", getUsers);
router.post("/login", login);
router.post("/register", uploadFile, createUser);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
