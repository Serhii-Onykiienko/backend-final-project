import { Router } from "express";
import { orders as ctrl } from "../controllers/index.js";
import { celebrate } from "celebrate";
import { createOrderSchema } from "../validations/ordersValidation.js";

const ordersRouter = Router();

ordersRouter.get("/api/orders", ctrl.getOrders);
ordersRouter.post(
  "/api/orders",
  celebrate(createOrderSchema),
  ctrl.createOrder,
);
ordersRouter.patch("/api/orders", ctrl.updateOrderStatus);

export default ordersRouter;
