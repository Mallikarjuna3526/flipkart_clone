const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.get("/search/:query", productController.searchProducts);
router.get("/category/:category", productController.filterByCategory);

module.exports = router;
