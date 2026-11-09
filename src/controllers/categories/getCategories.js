import { categories } from "../../services/index.js";

export const getCategories = async (req, res) => {
  const result = await categories.getCategories(req.query);

  res.status(200).json({
    status: 200,
    message: "Successfully found categories!",
    data: result,
  });
};