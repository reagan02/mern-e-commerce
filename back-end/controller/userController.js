const user = require("./userController");
const Account = require("../models/UserModel");
const mongoose = require("mongoose");
const { response } = require("express");

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
  const { userName, email, password } = req.body;

  // check if email is already in use
  const existingUser = await Account.findOne({ userName, email });
  if (existingUser) {
    console.log("Email is already in use");
    return res.status(400).json({ error: "Email is already in use" });
  }
  // add new acc to db
  try {
    const user = await Account.create({
      userName,
      email,
      password,
    });

    // If authentication is successful:
    req.session.user = {
      id: user._id, // The ID of the user
      username: user.name, // The username of the user
    };
    console.log("Account:", req.session.user);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update account
const updateAccount = async (req, res) => {
  const { id } = req.params; // id of the account
  const {
    userName,
    email,
    password,
    phoneNumber,
    firstName,
    lastName,
    streetAddress,
    optionalAddress,
    townCity,
  } = req.body;

  // check if the account is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Account Not Exist" });
  }

  //create a new object with only fields that is provided in the req.body
  const update = {
    ...(userName && { userName }),
    ...(email && { email }),
    ...(password && { password }),
    ...(phoneNumber && { phoneNumber }),
    ...(firstName && { firstName }),
    ...(lastName && { lastName }),
    ...(streetAddress && { streetAddress }),
    ...(optionalAddress && { optionalAddress }),
    ...(townCity && { townCity }),
  };

  try {
    // find the account and update
    const account = await Account.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    } else {
      console.log("Account updated:", account);
      res.status(200).json({ account });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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

// login an account
const login = async (req, res) => {
  const { email, password } = req.body;

  // find the user
  try {
    const user = await Account.findOne({ email, password });
    if (!user) {
      console.log("Invalid email or password");
      return res.status(404).json({ error: "Invalid email or password" });
    }

    // If authentication is successful:
    req.session.user = {
      id: user._id, // The ID of the user
      username: user.userName, // The username of the user
    };
    console.log("Login Account", req.session.user);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// logout
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to logout" });
    }
    res.clearCookie(process.env.SESS_NAME);
    res.json({ message: "Successfully logged out" });
    console.log("Successfully logged out");
  });
};

// export all the functions
module.exports = {
  getAllAccount,
  getAccount,
  createAccount,
  deleteAccount,
  updateAccount,
  login,
  logout,
};
