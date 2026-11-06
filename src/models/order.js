import { model, Schema } from "mongoose";

const orderedGoodSchema = new Schema(
  {
    goodId: {
      type: Schema.Types.ObjectId,
      ref: "Good",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false },
);

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    tel: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    postOffice: {
      type: Number,
      required: true,
      min: 1,
    },
    comment: {
      type: String,
      trim: true,
      default: "",
    },
    orderNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
    },
    status: {
      type: String,
      enum: ["inProcess", "completing", "done", "canceled"],
      default: "inProcess",
    },
    goodsOrderList: {
      type: [orderedGoodSchema],
      required: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "Order must contain at least one good",
      },
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Order = model("Order", orderSchema);
