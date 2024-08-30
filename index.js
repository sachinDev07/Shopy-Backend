const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/db/db");
const productRouter = require("./src/routes/product-routes")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use("/api/v1/products", productRouter);

connectDB()
  .then(() => {
    console.log("Database connection established successfully");
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is started at port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Mongoose connection error: ", error);
  });