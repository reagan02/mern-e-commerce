const OrderModel = require("../models/OrderModel.js");

// Add Order
const addOrder = async (req, res) => {
  const {
    userID,
    billingDetails,
    orderItems,
    totalPrice,
    coupunCode,
    paymentMethod,
  } = req.body;

  try {
    const order = await OrderModel.create({
      userID,
      billingDetails,
      orderItems,
      totalPrice,
      coupunCode,
      paymentMethod,
    });
    console.log(order);
    res.status(200).json({ message: "Order added successfully", order });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// get All Order
const getAllOrder = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteAllOrder = async (req, res) => {
  try {
    await OrderModel.deleteMany();
    res.status(200).json({ message: "All orders deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
module.exports = { addOrder, getAllOrder, deleteAllOrder };
