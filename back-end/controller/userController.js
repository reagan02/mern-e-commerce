const user = require("./userController");
const Account = require("../models/CreateAccModel");
const mongoose = require("mongoose");

// get all account
const getAllAccount = async (req, res) => {
  const allAccounts = await Account.find().sort({ createdAt: -1 }); // sort by the latest

  res.status(200).json({ allAccounts });
};

//get a single account
const getAccount = async (req, res) => {
  const { id } = req.params; // id of the account
  // check if the account is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Account Not Exist" });
  }
  // find the account
  const account = await Account.findById(id);

  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }
  res.status(200).json({ account });
};

// create a new account
const createAccount = async (req, res) => {
  const { name, emailOrPhoneNumber, password } = req.body;

  // add new acc to db
  try {
    const create = await Account.create({
      name,
      emailOrPhoneNumber,
      password,
    });
    res.status(200).json({ create });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// update a workout
const updateAccount = async (req, res) => {
  const { id } = req.params; // id of the account
  const { name, emailOrPhoneNumber, password } = req.body; // new data

  // check if the account is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Account Not Exist" });
  }
  // find the account and update
  const account = await Account.findOneAndUpdate(
    { _id: id },
    { name, emailOrPhoneNumber, password, _id: id },
    { new: true }
  );

  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }
  res.status(200).json({ account });
};

// delete a account
const deleteAccount = async (req, res) => {
  const { id } = req.params; // id of the account

  // check if the account is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Account Not Exist" });
  }
  // find the account and delete
  const account = await Account.findOneAndDelete({ _id: id });

  if (!account) {
    return res.status(404).json({ error: "Account Deleted" });
  }
  res.status(200).json({ account });
};

// export all the functions
module.exports = {
  getAllAccount,
  getAccount,
  createAccount,
  deleteAccount,
  updateAccount,
};
