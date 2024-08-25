const Product = require("../models/product");

async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error while creating product: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later",
    });
  }
}

module.exports = {
  createProduct,
};
