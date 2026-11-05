import { Joi, Segments } from "celebrate";
import { objectIdValidator } from "../utils/objectIdValidator.js";

export const createFeedbackSchema = {
  [Segments.BODY]: Joi.object({
    author: Joi.string().trim().min(2).required(),
    description: Joi.string().trim().max(260),
    rate: Joi.number().min(1).max(5).required(),
    productId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const getFeedbacksSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1),
    perPage: Joi.number().integer().min(1).max(20).default(12),
    productId: Joi.string().custom(objectIdValidator).required(),
  }),
};
