import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema({});

export const Subscription = model("Subscription", subscriptionSchema);
