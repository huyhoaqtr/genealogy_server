/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";
import envConfig from "~/configs/environment";

/**
 * Connects to MongoDB using the provided MONGODB_URL environment variable.
 * If the connection is successful, logs a success message to the console.
 * If the connection fails, logs an error message to the console and terminates
 * the process with a status code of 1.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.MONGODB_URL);
    console.log("Connected to MongoDB", envConfig.MONGODB_URL);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
