const express = require("express");
const {
  createAccount,
  getAccount,
  getAllAccount,
  deleteAccount,
  updateAccount,
  checkSession,
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

router.get("/check-session", checkSession);

module.exports = router;
