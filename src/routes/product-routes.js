const express = require("express");
const { createProduct } = require("../controllers/product-controller");
const {
  validateCreateProductRequest,
} = require("../middlewares/product-middlewares");
const upload  = require("../middlewares/multer-middleware");

const router = express.Router();

router.post(
  "/create",
  upload.single("image"),
  validateCreateProductRequest,
  createProduct,
);

module.exports = router;
