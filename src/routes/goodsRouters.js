import { Router } from "express";
import { goods as ctrl } from "../controllers/index.js";
import { celebrate } from "celebrate";
import {
  getGoodByIdSchema,
  getGoodsSchema,
} from "../validations/goodsValidation.js";

const goodsRouter = Router();

goodsRouter.get("/api/goods", celebrate(getGoodsSchema), ctrl.getGoods);
goodsRouter.get(
  "/api/goods/:goodsId",
  celebrate(getGoodByIdSchema),
  ctrl.getGoodById,
);

export default goodsRouter;
