const express = require("express");

const {
  addCart,
  getCart,
  deleteCart,
  getSingleCart,
} = require("../controller/cartController");

const router = express.Router("");

// Post Cart
router.post("/", addCart);

router.get("/", getCart);

// Get single cart
router.get("/user", getSingleCart);

router.delete("/:id", deleteCart);

module.exports = router;
