//? Створити замовлення

import { Order } from "../../models/order.js";
import generateOrderNumber from "../../services/generateOrderNumber.js";

export const createOrder = async (req, res) => {
  const orderNumber = await generateOrderNumber();

  const order = await Order.create({
    ...req.body,
    orderNumber,
    userId: req.user?._id || null,
  });

  res.status(201).json(order);
};
