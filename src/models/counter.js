import { model, Schema } from "mongoose";

const counterSchema = new Schema({
  //   назва лічильника
  _id: {
    type: String,
    required: true,
  },
  // поточне значення лічильника
  seq: {
    type: Number,
    default: 0,
  },
});

export const Counter = model("Counter", counterSchema);
