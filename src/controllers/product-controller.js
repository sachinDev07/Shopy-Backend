const Product = require("../models/product");
const uploadOnCloudinary = require("../utils/cloudinary");

async function createProduct(req, res) {  
  try {
    const productImageLocalPath = req.file?.path;
    if (!productImageLocalPath) {
      throw new Error("Product image is missing");
    }

    const productImage = await uploadOnCloudinary(productImageLocalPath);
    if (!productImage.url) {
      throw new Error("Product image upload failed!");
    }
    const { title, description, price, rating, category } = req.body;
    const product = await Product.create({
      title,
      description,
      price,
      rating,
      category,
      image: productImage.url,
    });

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
