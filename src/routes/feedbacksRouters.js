import { Router } from "express";
import { feedbacks as ctrl } from "../controllers/index.js";
import { celebrate } from "celebrate";
import {
  createFeedbackSchema,
  getFeedbacksSchema,
} from "../validations/feedbacksValidation.js";

const feedbacksRouter = Router();

feedbacksRouter.get(
  "/api/feedbacks",
  celebrate(getFeedbacksSchema),
  ctrl.getFeedbacks,
);
feedbacksRouter.post(
  "/api/feedbacks",
  celebrate(createFeedbackSchema),
  ctrl.createFeedback,
);

export default feedbacksRouter;
