//? Отримати всі Feedbacks
import { Feedback } from "../../models/feedback.js";

export const getFeedbacks = async (req, res) => {
  try {
    const {
      productId,
      page = 1,
      perPage = 12,
    } = req.query;

    const skip = (Number(page) - 1) * Number(perPage);

    const filter = { productId };

    const [feedbacks, totalItems] = await Promise.all([
      Feedback.find(filter)
        .sort({ _id: -1 })
        .skip(skip)
        .limit(Number(perPage))
        .lean(),
      Feedback.countDocuments(filter),
    ]);

    res.status(200).json({
      status: 200,
      message: "Successfully fetched feedbacks",
      data: {
        feedbacks,
        page: Number(page),
        perPage: Number(perPage),
        totalItems,
        totalPages: Math.ceil(totalItems / Number(perPage)),
      },
    });
  } catch (error) {
    console.error("Get feedbacks error:", error);

    res.status(500).json({
      error: "Failed to get feedbacks",
    });
  }
};