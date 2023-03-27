import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

export interface IReview {
  gigId: string;
  userId: string;
  star: number;
  desc: string;
}

const reviewSchema = new Schema<IReview>(
  {
    gigId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review: Model<IReview> = mongoose.model<IReview>("Review", reviewSchema);

export default Review;
