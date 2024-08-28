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

async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All products found successfully",
      length: products.length,
      products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while searching for the products",
    });
  }
}

async function getFilteredData(req, res) {
  try {
    const { category } = req.body;
    const products = await Product.find({ category });
    if (products.length === 0) {
      return res.status(200).json({
        success: false,
        message: "No products are found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully found the products",
      length: products.length,
      products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while searching for the products",
    });
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getFilteredData,
};
