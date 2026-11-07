// Отримати один товар

import { Good } from "../../models/good";

export const getGoodById = async (req, res) => {
  const { goodId } = req.params;
  const note = await Good.findOne({ _id: goodId, userId: req.user._id });

  if (!note) {
    throw createHttpError(404, "Good not found");
  }

  res.status(200).json(note);
};
