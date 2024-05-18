const express = require("express");

const {
  addProduct,
  getProductsByCategory,
  deleteProduct,
  countProducts,
  getSmartphone,
  getSingleProduct,
  getAllProducts,
  getFlashSales
} = require("../controller/productController");

const router = express.Router();

// POST a new smartphone product
router.post("/", addProduct);

// GET all products
router.get("/", getAllProducts);

// Get products by category
router.get("/category", getProductsByCategory);

// Get a single products
router.get("/:id", getSingleProduct);
// DELETE a product
router.delete("/:id", deleteProduct);

router.get("/count/:category", countProducts);

// Get all smartphone
router.get("/smartphone", getSmartphone);

router.get("/flashSales", getFlashSales);
module.exports = router;
