import express, { Express, NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { connectDB } from "./db/connect";
import userRoute from "./routes/user.route";
import gigRoute from "./routes/gig.route";
import orderRoute from "./routes/order.route";
import conversationRoute from "./routes/conversation.route";
import messageRoute from "./routes/message.route";
import reviewRoute from "./routes/review.route";
import authRoute from "./routes/auth.route";
import { CustomAPIError } from "./utils/createError";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
mongoose.set("strictQuery", true);

const app: Express = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use(
  (err: CustomAPIError, req: Request, res: Response, next: NextFunction) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).send(errorMessage);
  }
);

const port = process.env.PORT || 8800;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
