const express = require("express");

const {
  addProduct,
  getProducts,
  deleteProduct,
  countProducts,
  getSmartphone,
  getSingleProduct,
} = require("../controller/productController");

const router = express.Router();

// POST a new smartphone product
router.post("/", addProduct);

// Get all products
router.get("/", getProducts);

// Get a single products
router.get("/:id", getSingleProduct);
// DELETE a product
router.delete("/:id", deleteProduct);

router.get("/count", countProducts);

// Get all smartphone
router.get("/smartphone", getSmartphone);

module.exports = router;
