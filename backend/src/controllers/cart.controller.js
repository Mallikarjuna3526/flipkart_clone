const cartModel = require("../models/cart.model");

exports.getCart = async (req, res, next) => {
  try {
    const cart = await cartModel.getCart();
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    const { product_id, quantity } = req.body;
    const item = await cartModel.addItem(product_id, quantity);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.updateQuantity = async (req, res, next) => {
  try {
    const item = await cartModel.updateQuantity(
      req.params.id,
      req.body.quantity
    );
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.removeItem = async (req, res, next) => {
  try {
    await cartModel.removeItem(req.params.id);
    res.json({ message: "Item removed" });
  } catch (err) {
    next(err);
  }
};
