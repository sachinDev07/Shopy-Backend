const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
    },
    price: {
      type: String,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
        type: String,
        required: true,
        enum: ["Electronics", "Clothes", "Books","Phones", "Laptops", "Other"]
    }
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
