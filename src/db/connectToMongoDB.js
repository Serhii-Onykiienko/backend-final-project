import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    await mongoose.connect(mongoUrl, {
      dbName: "final-project",
    });

    console.log("✅ Connected to MongoDB:", mongoose.connection.name);
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};
