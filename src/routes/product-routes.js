const express = require("express");
const { createProduct } = require("../controllers/product-controller");

const router = express.Router();

router.post("/create", createProduct);

module.exports = router;
