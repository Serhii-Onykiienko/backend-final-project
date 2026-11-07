// Отримати один товар

import { Good } from "../../models/good.js";
import createHttpError from "http-errors";

export const getGoodById = async (req, res) => {
  const { goodsId } = req.params;
  const good = await Good.findOne({ _id: goodsId });

  if (!good) {
    throw createHttpError(404, "Good not found");
  }

  res.status(200).json(good);
};
