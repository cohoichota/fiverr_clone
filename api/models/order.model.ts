import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

export interface IOrder {
  gigId: string;
  img: string;
  title: string;
  price: number;
  sellerId: string;
  buyerId: string;
  isCompleted: boolean;
  payment_intent: string;
}

const orderSchema = new Schema<IOrder>(
  {
    gigId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order: Model<IOrder> = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
