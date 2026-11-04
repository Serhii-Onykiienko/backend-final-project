import { Router } from "express";
import { feedbacks as ctrl } from "../controllers/index.js";

const feedbacksRouter = Router();

feedbacksRouter.get("/api/feedbacks", ctrl.getFeedbacks);
feedbacksRouter.post("/api/feedbacks", ctrl.createFeedback);

export default feedbacksRouter;
