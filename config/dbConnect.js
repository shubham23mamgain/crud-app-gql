import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "config/.env.local" });

export const dbConnect = async () => {
  try {
    let connectionString = "";

    if (process.env.NODE_ENV === "development")
      connectionString = process.env.MONGODB_URI_LOCAL;
    if (process.env.NODE_ENV === "production")
      connectionString = process.env.MONGODB_URI_PRODUCTION;

    mongoose
      .connect(connectionString)
      .then(() => console.log("Database connected Successfully"));
  } catch (error) {
    console.log("Error Connecting to MongoDB:", error);
  }
};
