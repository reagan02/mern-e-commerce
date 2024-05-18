const express = require("express");

const {
  addOrder,
  getAllOrder,
  deleteAllOrder,
} = require("../controller/orderController");

const router = express.Router();

// Post Order
router.post("/", addOrder);

// Get All Order
router.get("/", getAllOrder);

// Delete All Order
router.delete("/", deleteAllOrder);

module.exports = router;
