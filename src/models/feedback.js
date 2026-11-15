import { Schema, model } from "mongoose";

const feedbackSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      default: () => new Date().toISOString().slice(0, 10),
    },
    description: {
      type: String,
      trim: true,
      maxlength: 260,
    },
    rate: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    category: String,
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Good",
      required: true,
    },
  },
  { versionKey: false },
);
feedbackSchema.index({ productId: 1, date: -1 });
export const Feedback = model("Feedback", feedbackSchema);
