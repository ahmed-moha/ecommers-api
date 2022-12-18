const express = require("express");
const router = express.Router();
const {
  getOrder,
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("./controller");

router.get("/", getOrders);
router.post("/", createOrder);
router.get("/:id", getOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
