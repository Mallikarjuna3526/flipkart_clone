const productModel = require("../models/product.model");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productModel.getAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productModel.getById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.searchProducts = async (req, res, next) => {
  try {
    const products = await productModel.search(req.params.query);
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.filterByCategory = async (req, res, next) => {
  try {
    const products = await productModel.filterByCategory(req.params.category);
    res.json(products);
  } catch (err) {
    next(err);
  }
};
