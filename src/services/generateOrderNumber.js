import { Counter } from "../models/counter.js";

const generateOrderNumber = async () => {
  const counter = await Counter.findByIdAndUpdate(
    "orderNumber",
    { $inc: { seq: 1 } },
    {
      new: true,
      upsert: true,
    },
  );

  return counter.seq;
};

export default generateOrderNumber;

// $inc: { seq: 1 } атомарно збільшує значення на одиницю.
// upsert: true створює документ, якщо його ще немає.
// new: true повертає вже оновлений документ.
