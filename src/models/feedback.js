import { Schema, model } from "mongoose";

const feedbackSchema = new Schema(
  {
    author: String,
    date: String,
    description: String,
    rate: Number,
    category: String,
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Good",
    },
  },
  //   { timestamps: true, versionKey: false },
);

export const Feedback = model("Feedback", feedbackSchema);
