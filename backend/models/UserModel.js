const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;
const accountSchema = new Schema(
	{
		userName: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: false,
		},
		lastName: {
			type: String,
			required: false,
		},

		streetAddress: {
			type: String,
			required: false,
		},
		townCity: {
			type: String,
			required: false,
		},
		optionalAddress: {
			type: String,
			required: false,
		},

		company: {
			type: String,
			required: false,
		},
		phoneNumber: {
			type: Number,
			required: false,
		},
	},
	{ timestamps: true }
);
// signup static method
accountSchema.statics.createAccount = async function (
	userName,
	email,
	password
) {
	if (!userName || !email || !password) {
		throw new Error("Please fill in all fields");
	}
	if (!validator.isEmail(email)) {
		throw new Error("Invalid email");
	}
	if (!validator.isLength(userName, { min: 6, max: 15 })) {
		throw new Error("Username must be between 6 and 15 characters");
	}
	if (!validator.isLength(password, { min: 6 })) {
		throw new Error("Password must be at least 6 characters long");
	}
	const existingUserName = await this.findOne({ userName });
	const existingEmail = await this.findOne({ email });
	// check if the email and username exists
	if (existingEmail) {
		throw new Error("Email already exists");
	}
	if (existingUserName) {
		throw new Error("Username already exists");
	}
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ userName, email, password: hash });

	return user;
};

// login static method
accountSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw new Error("Please fill in all fields");
	}
	const user = await this.findOne({ email });
	if (!user) {
		throw new Error("Invalid email ");
	}
	const auth = await bcrypt.compare(password, user.password);

	if (!auth) {
		throw new Error("Incorrect password");
	}

	return user;
};
module.exports = mongoose.model("Account", accountSchema);
