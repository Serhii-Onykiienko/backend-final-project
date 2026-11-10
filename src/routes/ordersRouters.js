import { Router } from "express";
import { orders as ctrl } from "../controllers/index.js";
import { celebrate } from "celebrate";
import { createOrderSchema } from "../validations/ordersValidation.js";
import { authorization } from "../middlewares/authorization.js";
import { authorizeAdmin } from "../middlewares/authorizeAdmin.js";

const ordersRouter = Router();

ordersRouter.get("/api/orders", authorization, ctrl.getOrders);
ordersRouter.post(
  "/api/orders",
  celebrate(createOrderSchema),
  ctrl.createOrder,
);
ordersRouter.patch("/api/orders/:orderId", authorization, authorizeAdmin, ctrl.updateOrderStatus);

export default ordersRouter;
