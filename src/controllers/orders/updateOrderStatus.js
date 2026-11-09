import createHttpError from "http-errors";
import { Order } from "../../models/order.js";

const ORDER_STATUSES = [
  "inProcess",
  "completing",
  "done",
  "canceled",
];

export const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  if (!ORDER_STATUSES.includes(status)) {
    throw createHttpError(400, "Invalid order status");
  }

  const order = await Order.findOneAndUpdate(
    { _id: orderId },
    { status },
    { returnDocument: "after", runValidators: true },
  );

  if (!order) {
    throw createHttpError(404, "Order not found");
  }
  
  res.status(200).json(order);
};
