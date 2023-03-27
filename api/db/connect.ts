import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected To Database");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
