const ProductModel = require("../models/ProductModel");

const mongoose = require("mongoose");

// Add Product
const addProduct = async (req, res) => {
  const {
    name,
    description,
    category,
    images,
    brand,
    rating,
    discount,
    numberOfReviews,
    color,
    variants,
  } = req.body;

  try {
    const product = await ProductModel.create({
      name,
      description,
      category,
      images,
      brand,
      rating,
      discount,
      numberOfReviews,
      color,
      variants,
    });
    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Get single product
const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Get all smartphone
const getSmartphone = async (req, res) => {
  try {
    const products = await ProductModel.find({ category: "Smartphone" });
    res.status(200).json(products);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No product with id: ${id}`);

    await ProductModel.findByIdAndDelete(id);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Count Products
const countProducts = async (req, res) => {
  try {
    const count = await ProductModel.countDocuments();
    res.json({ count });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Exports all functions
module.exports = {
  addProduct,
  getProducts,
  getSingleProduct,
  deleteProduct,
  countProducts,
  getSmartphone,
};
