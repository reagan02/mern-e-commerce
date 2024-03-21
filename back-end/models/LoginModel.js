const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const newSchema = new Schema(
  {
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

module.exports = mongoose.model("login", newSchema);
