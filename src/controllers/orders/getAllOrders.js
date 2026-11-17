import { Order } from "../../models/order.js";

export const getAllOrders = async (req, res) => {
  const { page, perPage, status } = req.query;

  const filter = status ? { status } : {};
  const skip = (page - 1) * perPage;

  const [orders, totalItems] = await Promise.all([
    Order.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(perPage)
      .populate("goodsOrderList.goodId", "name"),
    Order.countDocuments(filter),
  ]);

  res.status(200).json({
    status: 200,
    message: "Successfully found orders!",
    data: {
      orders,
      page,
      perPage,
      totalItems,
      totalPages: Math.ceil(totalItems / perPage),
    },
  });
};