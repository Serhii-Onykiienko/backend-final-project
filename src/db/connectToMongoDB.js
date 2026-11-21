import mongoose from "mongoose";
import { Good } from "../models/good.js";
import { User } from "../models/user.js";

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    // await mongoose.connect(mongoUrl);
    await mongoose.connect(mongoUrl, {
      dbName: "closette",
    });
    await Good.syncIndexes();
    await User.syncIndexes();
    console.log("✅ Connected to MongoDB:", mongoose.connection.name);
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};
