import { Router } from "express";
import { orders as ctrl } from "../controllers/index.js";
import { celebrate } from "celebrate";
import { createOrderSchema, updateOrderStatusSchema, getAllOrdersSchema} from "../validations/ordersValidation.js";
import { authorization, optionalAuthorization } from "../middlewares/authorization.js";
import { authorizeAdmin } from "../middlewares/authorizeAdmin.js";

const ordersRouter = Router();

ordersRouter.get("/api/orders", authorization, ctrl.getOrders);
ordersRouter.post(
  "/api/orders",
  celebrate(createOrderSchema),
  optionalAuthorization,
  ctrl.createOrder,
);
ordersRouter.patch("/api/orders/:orderId",
  authorization,
  authorizeAdmin,
  celebrate(updateOrderStatusSchema),
  ctrl.updateOrderStatus);

ordersRouter.get(
  "/api/orders/admin",
  authorization,
  authorizeAdmin,
  celebrate(getAllOrdersSchema),
  ctrl.getAllOrders,
);

export default ordersRouter;
