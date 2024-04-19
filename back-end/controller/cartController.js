const Cart = require("../models/CartModel.js");

// Add or Update Cart
const addCart = async (req, res) => {
  const { userID, productData } = req.body;
  try {
    // check if the user already has a cart for the product, if yes update the quantity
    const findUserCart = await Cart.findOneAndUpdate(
      {
        userID: userID,
        products: {
          $elemMatch: {
            productID: productData.productID,
            productName: productData.productName,
            size: productData.size,
            price: productData.price,
            image: productData.image,
          },
        },
      },
      {
        $inc: {
          "products.$.quantity": productData.quantity,
        },
      },
      { new: true }
    );

    // if the user does not any existing product in the cart, create a new product for the cart
    if (!findUserCart) {
      const findUser = await Cart.findOneAndUpdate(
        { userID },
        { $push: { products: productData } },
        { new: true }
      );
      // if the user does not have any cart, create a new cart
      if (!findUser) {
        await Cart.create({
          userID: userID,
          products: [productData],
        });
      }
    }
    return res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// get single user cart
const getSingleCart = async (req, res) => {
  const { userID } = req.query; //
  try {
    const response = await Cart.findOne({ userID: userID });
    if (!response) {
      return res.status(404).send("No item found");
    }

    // console.log(response); pwede man diay ni response lang dili na pwede mag mapdiri
    res.status(200).json({ response });
    // res.status(200).json({ products: response.map((cart) => cart.products) });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// get all
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();

    res.status(200).json({ cart });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete cart
const deleteCart = async (req, res) => {
  const productID = req.params.id;
  const userID = req.query.userID;
  try {
    const cart = await Cart.updateOne(
      { userID: userID },
      { $pull: { products: { _id: productID } } }
    );
    if (!cart) res.status(404).send("No item found");
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addCart, getCart, deleteCart, getSingleCart };
