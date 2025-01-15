import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongo = await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB connected ${mongo.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.mongoose}`);
    process.exit(1);
  }
};
