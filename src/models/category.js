import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  image: String,
});

export const Category = model("Category", categorySchema);