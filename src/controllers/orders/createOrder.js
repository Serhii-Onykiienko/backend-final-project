//? Створити замовлення

import { Order } from "../../models/order.js";
import generateOrderNumber from "../../services/generateOrderNumber.js";

export const createOrder = async (req, res) => {
  const orderNumber = await generateOrderNumber();

  let userId = null;
  if (req.userId !== undefined) {
    userId = req.userId;
  }

  const order = await Order.create({ ...req.body, orderNumber, userId });

  res.status(201).json(order);
};
