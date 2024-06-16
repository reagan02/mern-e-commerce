const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
	userID: {
		type: Schema.Types.ObjectId,
		ref: "account",
		required: true,
	},
	products: [
		{
			productID: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: "products",
			},
			productName: {
				type: String,
				required: true,
			},
			size: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			variantIndex: {
				type: Number,
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
			image: {
				type: String,
				required: true,
			},
			subtotal: {
				type: Number,
				required: true,
			},
		},
	],
});

module.exports = mongoose.model("cart", CartSchema);
