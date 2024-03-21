const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const createAccountSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailOrPhoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("createAccount", createAccountSchema);
