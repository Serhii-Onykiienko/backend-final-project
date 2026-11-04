import { Router } from "express";
import { orders as ctrl } from "../controllers/index.js";

const ordersRouter = Router();

ordersRouter.get("/api/orders", ctrl.getOrders);
ordersRouter.post("/api/orders", ctrl.createOrder);
ordersRouter.patch("/api/orders", ctrl.updateOrderStatus);

export default ordersRouter;
