const express = require("express");

const {
  addProduct,
  getProducts,
  deleteProduct,
  countProducts,
} = require("../controller/productController");

const router = express.Router();

// POST a new smartphone product
router.post("/", addProduct);

// Get all products
router.get("/", getProducts);

// DELETE a product
router.delete("/:id", deleteProduct);

router.get("/count", countProducts);

module.exports = router;
