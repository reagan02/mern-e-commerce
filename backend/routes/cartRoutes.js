const express = require("express");

const {
	addCart,
	getCart,
	deleteCartItems,
	getSingleCart,
	getStock,
	deleteAllCart,
} = require("../controller/cartController");

const router = express.Router("");

// Post Cart
router.post("/", addCart);

router.get("/", getCart);

// Get single cart
router.get("/user", getSingleCart);

router.post("/deleteSelectedItems", deleteCartItems); //  delete single item

router.get("/products/:id/variants/:variantIndex", getStock);

router.delete("/deleteAll/:id", deleteAllCart); // delete all Item

module.exports = router;
