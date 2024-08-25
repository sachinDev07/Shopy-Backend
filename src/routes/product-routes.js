const express = require("express");
const { createProduct } = require("../controllers/product-controller");
const { validateCreateProductRequest } = require("../middlewares/product-middlewares");

const router = express.Router();

router.post("/create", validateCreateProductRequest, createProduct);

module.exports = router;
