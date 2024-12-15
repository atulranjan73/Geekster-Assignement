import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error(
        "MONGO_URI environment variable is missing. Please set it for the development environment."
    );
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;
