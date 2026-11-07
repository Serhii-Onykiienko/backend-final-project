import { Router } from "express";
import { orders as ctrl } from "../controllers/index.js";
import { celebrate } from "celebrate";
import { createOrderSchema } from "../validations/ordersValidation.js";
import { authenticate } from "../middleware/authenticate.js";

const ordersRouter = Router();

ordersRouter.get("/api/orders", authenticate, ctrl.getOrders);
ordersRouter.post(
  "/api/orders",
  celebrate(createOrderSchema),
  authenticate,
  ctrl.createOrder,
);
ordersRouter.patch("/api/orders", authenticate, ctrl.updateOrderStatus);

export default ordersRouter;
