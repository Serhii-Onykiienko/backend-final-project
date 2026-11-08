import { Category } from "../../models/category.js";

export const getCategories = async ({ page = 1, perPage = 6 }) => {
  const skip = (page - 1) * perPage;

  const [categories, totalItems] = await Promise.all([
    Category.find().sort({ _id: 1 }).skip(skip).limit(perPage),
    Category.countDocuments(),
  ]);

  return {
    categories,
    totalItems,
    page,
    perPage,
    totalPages: Math.ceil(totalItems / perPage),
  };
};