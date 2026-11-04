import { Schema, model } from "mongoose";

const goodSchema = new Schema({});

export const Good = model("Good", goodSchema);
