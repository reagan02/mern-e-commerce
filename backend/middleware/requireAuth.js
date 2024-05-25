const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/UserModel");
const requireAuth = async (req, res, next) => {
	// check for the token in the headers
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	const token = authorization.split(" ")[1];
	try {
		// verify the token
		const { _id } = jwt.verify(token, process.env.JWT_SECRET);
		req.user = await User.findById(_id);
		next();
	} catch (error) {
		return res.status(401).json({ message: "Unauthorized" });
	}
};

module.exports = requireAuth;
