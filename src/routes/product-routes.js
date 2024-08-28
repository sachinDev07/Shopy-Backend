const express = require("express");
const { createProduct, getAllProducts, getFilteredData } = require("../controllers/product-controller");
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

router.get("/", getAllProducts);

router.post("/filter", getFilteredData);

module.exports = router;
