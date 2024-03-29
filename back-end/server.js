require("dotenv").config();
const mongoose = require("mongoose"); // import mongoose
const express = require("express"); // import express
const session = require("express-session"); // import express-session
const userRoutes = require("./routes/user"); // import routes

// express app
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

// express session
app.use(
  session({
    secret: "reagan123",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Note: secure should be set to true when in a production environment and the site is served over HTTPS
  })
);

//routes
app.use("/api/accounts", userRoutes);

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

// middleware
app.get("/", (req, res) => {
  res.send("Express is running");
  console.log("Express is running");
});
