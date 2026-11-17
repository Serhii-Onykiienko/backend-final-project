import createHttpError from "http-errors";
import { Feedback } from "../../models/feedback.js";
import { Good } from "../../models/good.js";

export const createFeedback = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const good = await Good.findById(productId)
      .populate("category", "name")
      .lean();
    
    if (!good) {
      throw createHttpError(404, "Good not found");
    }

    const newFeedback = await Feedback.create({
      ...req.body,
      category: good.category?.name,
    });

    await Good.updateOne(
      { _id: productId },
      { $push: { feedbacks: newFeedback._id } },
    );

    res.status(201).json({
      status: 201,
      message: "Feedback successfully created",
      data: newFeedback,
    });
  } catch (error) {
    next(error);
  }
};
