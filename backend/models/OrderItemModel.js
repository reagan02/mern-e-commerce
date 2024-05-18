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

module.exports = mongoose.model("orderItems", orderItems);
