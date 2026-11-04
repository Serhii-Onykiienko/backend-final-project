import { Router } from "express";
import { goods as ctrl } from "../controllers/index.js";

const goodsRouter = Router();

goodsRouter.get("/api/goods", ctrl.getGoods);
goodsRouter.get("/api/goods/:goodsId", ctrl.getGoodById);

export default goodsRouter;
