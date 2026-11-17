import { Router } from "express";
import { celebrate } from "celebrate";
import { subscriptions as ctrl } from "../controllers/index.js";
import { createSubscriptionSchema } from "../validations/subscriptionsValidation.js";

const subscriptionsRouter = Router();

subscriptionsRouter.post(
  "/api/subscriptions",
  celebrate(createSubscriptionSchema),
  ctrl.createSubscription
);

export default subscriptionsRouter;