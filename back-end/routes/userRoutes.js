const express = require("express");
const {
  createAccount,
  getAccount,
  getAllAccount,
  deleteAccount,
  updateAccount,
  checkSession,
  login,
  logout,
  addAddress,
} = require("../controller/userController");

const router = express.Router();

// GET all accounts
router.get("/", getAllAccount);

// GET single account
router.get("/:id", getAccount);

// POST a new account
router.post("/", createAccount);

// delete a new account
router.delete("/:id", deleteAccount);

//  update an account
router.patch("/:id", updateAccount);

// check session
router.get("/checkSession", checkSession);

//login
router.post("/login", login);

// logout
router.post("/logout", logout);

// add address
router.post("/:id/address", addAddress);

module.exports = router;
