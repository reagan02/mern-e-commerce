require("dotenv").config();
const mongoose = require("mongoose"); // import mongoose
const express = require("express"); // import express
const session = require("express-session"); // import express-session
const userRoutes = require("./routes/userRoutes"); // import routes
const productRoutes = require("./routes/productRoutes"); // import routes
const orderRoutes = require("./routes/orderRoutes"); // import routes
const cartRoutes = require("./routes/cartRoutes"); // import routes
const cors = require("cors");

// express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/accounts", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

//Database Connection with mongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		//listen for request
		app.listen(process.env.PORT, (error) => {
			if (!error) {
				console.log(
					"Server is connected to mongo db & running on port",
					process.env.PORT
				);
			} else {
				console.log(`Error ${error}`);
			}
		});
	})
	.catch((error) => console.log(error));

// test route
app.get("/", (req, res) => {
	res.send("Express is running");
	console.log("Express is running");
});
