
import { Good } from "../../models/good.js";

export const getGoods = async ({
  page = 1,
  perPage = 12,
  category,
  gender,
  size,
  minPrice,
  maxPrice,
}) => {
 
  const filter = {};

  
  if (category) {
    filter.category = category;
  }

  
  if (gender) {
    filter.gender = gender;
  }

  
  if (size) {
    filter.size = size;
  }

  
  if (minPrice !== undefined || maxPrice !== undefined) {
    filter["price.value"] = {};

    if (minPrice !== undefined) {
      filter["price.value"].$gte = minPrice;
    }

    if (maxPrice !== undefined) {
      filter["price.value"].$lte = maxPrice;
    }
  }


  const skip = (page - 1) * perPage;

  
  const [goods, totalItems] = await Promise.all([
    Good.find(filter).skip(skip).limit(perPage),
    Good.countDocuments(filter),
  ]);

  return {
    goods,
    totalItems,
    page,
    perPage,
    totalPages: Math.ceil(totalItems / perPage),
  };
};
