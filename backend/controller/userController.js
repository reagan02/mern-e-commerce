const Account = require("../models/UserModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES,
	});
};

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
	try {
		const user = await Account.createAccount(userName, email, password);

		const token = createToken(user._id);
		console.log("Account created:", user);
		res.status(200).json({ user, token });
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
	// delete all accounts
	await Account.deleteMany();

	res.status(200).json({ message: "All accounts deleted" });
};

// login an account
const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		// login the account using the static method in userModel
		const user = await Account.login(email, password);
		const token = createToken(user._id);

		console.log("Login success:", user);
		res.status(200).json({ user, token });
	} catch (error) {
		console.log("Login failed:", error.message);
		res.status(401).json({ error: error.message });
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
