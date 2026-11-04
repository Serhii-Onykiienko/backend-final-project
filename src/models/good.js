import { Schema, model } from "mongoose";
import { GENDER, SIZE } from "../constants/tags";

const goodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    image: String,

    price: {
      value: Number,
      currency: String,
    },

    size: {
      type: String,
      enum: SIZE,
      required: true,
    },

    description: String,

    feedbacks: {
      type: Schema.Types.ObjectId,
      ref: "Feedback",
    },

    prevDescription: String,

    gender: {
      type: String,
      enum: GENDER,
    },
    characteristics: [String],
  },
  //   { timestamps: true, versionKey: false },
);

export const Good = model("Good", goodSchema);
