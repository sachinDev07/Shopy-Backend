async function validateCreateProductRequest(req, res, next) {
  const { title, description, price, rating, category } = req.body;
  const image = req.file?.path;

  if (!title || !description || !price || !rating || !image || !category) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  next();
}

module.exports = {
  validateCreateProductRequest,
};
