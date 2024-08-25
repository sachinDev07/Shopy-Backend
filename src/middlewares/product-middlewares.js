

async function validateCreateProductRequest(req, res, next) {
    const { title, description, price, rating, images, category } = req.body;
    if(!title || !description || !price || !rating || !images || category) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        })
    }

    next();
}

module.exports = {
    validateCreateProductRequest,
}