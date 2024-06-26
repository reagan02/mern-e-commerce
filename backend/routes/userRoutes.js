const express = require("express");
const {
	createAccount,
	getAccount,
	getAllAccount,
	deleteAccount,
	updateAccount,
	login,
	logout,
} = require("../controller/userController");

const router = express.Router();

// GET all accounts
router.get("/", getAllAccount);

// GET single account
router.get("/:id", getAccount);

// POST a new account
router.post("/signup", createAccount);

// delete a new account
router.delete("/", deleteAccount);

//  update an account
router.patch("/:id", updateAccount);

//login
router.post("/login", login);

// logout
router.post("/logout", logout);

module.exports = router;
