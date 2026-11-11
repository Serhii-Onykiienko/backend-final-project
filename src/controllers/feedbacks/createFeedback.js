import { Feedback } from "../../models/feedback.js";
import createHttpError from "http-errors";

export const createFeedback = async (req, res, next) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json({
      status: 201,
      message: "Feedback successfully created",
      data: newFeedback,
    });
  } catch (error) {
    next(error);
  }
};
