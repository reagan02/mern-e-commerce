const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const accountSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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

module.exports = mongoose.model("Account", accountSchema);
