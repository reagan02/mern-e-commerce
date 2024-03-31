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
  const { name, email, password } = req.body;

  // check if email is already in use
  const existingUser = await Account.findOne({ email });
  if (existingUser) {
    console.log("Email is already in use");
    return res.status(400).json({ error: "Email is already in use" });
  }
  // add new acc to db
  try {
    const user = await Account.create({
      name,
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

// add address to an existing account
const addAddress = async (req, res) => {
  const { id } = req.params; // get the user id from the request parameters
  const { street, city, state, zip } = req.body; // get the address details from the request body

  try {
    // find the user by id and update their address
    const user = await Account.findByIdAndUpdate(
      id,
      { $push: { address: { street, city, state, zip } } },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a workout
const updateAccount = async (req, res) => {
  const { id } = req.params; // id of the account
  const { name, email, password } = req.body; // new data

  // check if the account is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Account Not Exist" });
  }
  // find the account and update
  const account = await Account.findOneAndUpdate(
    { _id: id },
    { name, email, password, _id: id },
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

// check Session
const checkSession = (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
    console.log("session1:", req.session.user);
  } else {
    res.status(401).json({ error: "Unauthenticated" });
  }
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
      username: user.name, // The username of the user
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
  checkSession,
  login,
  logout,
  addAddress,
};
