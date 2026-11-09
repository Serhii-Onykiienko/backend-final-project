import { Joi, Segments } from "celebrate";
import { GENDER, SIZE } from "../constants/tags.js";
import { objectIdValidator } from "../utils/objectIdValidator.js";

export const getGoodsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(20).default(12),

    category: Joi.string().custom(objectIdValidator),

    gender: Joi.string().valid(...GENDER),

    size: Joi.string().valid(...SIZE),

    minPrice: Joi.number().min(0),
    maxPrice: Joi.number().min(0),
  })

   .custom((value, helpers) => {
      if (
        value.minPrice !== undefined &&
        value.maxPrice !== undefined &&
        value.minPrice > value.maxPrice
      ) {
        return helpers.message({
          custom: "minPrice cannot be greater than maxPrice",
        });
      }

      return value;
    }),
};

export const getGoodByIdSchema = {
  [Segments.PARAMS]: Joi.object({
    goodsId: Joi.string().custom(objectIdValidator).required(),
  }),
};
