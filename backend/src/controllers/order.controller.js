
const orderModel = require("../models/order.model");

exports.placeOrder = async (req, res, next) => {
  try {
    const { address } = req.body;
    const order = await orderModel.createOrder(address);
    res.json(order);
  } catch (err) {
    next(err);
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const order = await orderModel.getOrderById(req.params.id);
    res.json(order);
  } catch (err) {
    next(err);
  }
};
