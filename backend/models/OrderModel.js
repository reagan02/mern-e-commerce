const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItems = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "products",
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "accounts",
    },
    billingDetails: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      streetAddress: {
        type: String,
        required: true,
      },
      optionalAddress: {
        type: String,
        required: false,
      },
      townCity: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },

    orderItems: [orderItems],

    totalPrice: {
      type: Number,
      required: true,
    },
    coupunCode: {
      type: String,
      required: false,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
