const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
    } catch (error) {
        console.error("Mongodb connection error: ", error);
    }
}

module.exports = connectDB;