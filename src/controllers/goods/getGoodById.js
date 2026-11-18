// Отримати один товар

import { Good } from "../../models/good.js";
import createHttpError from "http-errors";
import { addRatings } from "../../services/goods/addRatings.js";

export const getGoodById = async (req, res) => {
  const { goodsId } = req.params;
  const good = await Good.findOne({ _id: goodsId }).lean();

  if (!good) {
    throw createHttpError(404, "Good not found");
  }

  const [goodWithRating] = await addRatings([good]);

  res.status(200).json(goodWithRating);
};
