//? Отримати всі товари

// export const getGoods = async (req, res) => {};


import { goods } from "../../services/index.js";

export const getGoods = async (req, res) => {

  const result = await goods.getGoods(req.query);

  res.status(200).json({
    status: 200,
    message: "Successfully found goods!",
    data: result,
  });
};
