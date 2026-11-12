import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";
import { SIZE } from "../constants/tags.js";
import { PHONE_REG_EXP } from "../constants/phoneRegExp.js";

// Кастомний валідатор для ObjectId
const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message("Invalid id format") : value;
};

export const createOrderSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      "string.base": "Name must be a string",
      "string.min": "Name should have at least {#limit} characters",
      "string.max": "Name should have at most {#limit} characters",
      "any.required": "Name is required",
    }),
    surname: Joi.string().min(3).max(30).required().messages({
      "string.base": "Surname must be a string",
      "string.min": "Surname should have at least {#limit} characters",
      "string.max": "Surname should have at most {#limit} characters",
      "any.required": "Surname is required",
    }),
    tel: Joi.string().pattern(PHONE_REG_EXP).required().messages({
      "string.base": "Tel must be a string",
      "string.pattern.base": "Phone number must be in the format +380XXXXXXXXX",
      "any.required": "Tel is required",
      "string.empty": "Tel cannot be empty",
    }),
    city: Joi.string().min(3).max(30).required().messages({
      "string.base": "City must be a string",
      "string.min": "City should have at least {#limit} characters",
      "string.max": "City should have at most {#limit} characters",
      "any.required": "City is required",
    }),
    postOffice: Joi.number().min(1).max(999999).integer().required().messages({
      "number.base": "Post office must be a number",
      "number.min": "Post office should have at least {#limit} characters",
      "number.max": "Post office should have at most {#limit} characters",
      "number.integer": "Post office must be an integer",
      "any.required": "Post office is required",
    }),
    comment: Joi.string().min(3).max(300).messages({
      "string.base": "Comment must be a string",
      "string.min": "Comment should have at least {#limit} characters",
      "string.max": "Comment should have at most {#limit} characters",
    }),
    amount: Joi.number().min(1).max(50000).integer().required().messages({
      "number.base": "Amount Of Order must be a number",
      "number.min": "Amount Of Order should have at least {#limit} characters",
      "number.max": "Amount Of Order should have at most {#limit} characters",
      "any.required": "Amount Of Order is required",
    }),
    status: Joi.string()
      .valid("inProcess", "completing", "done", "canceled")
      .default("inProcess"),
    goodsOrderList: Joi.array()
      .items(
        Joi.object({
          goodId: Joi.string().custom(objectIdValidator).required(),
          quantity: Joi.number().integer().min(1).max(100).required(),
          size: Joi.string()
            .valid(...SIZE)
            .required()
            .messages({
              "string.base": "Size must be a string",
              "any.only": `Size must be one of: ${SIZE.join(", ")} `,
            }),
        }),
      )
      .messages({
        "array.base": "Order list must be an array",
        "array.min": "Order list must contain at least {#limit} items",
        "array.max": "Order list must contain at most {#limit} items",
      })
      .min(1)
      .required(),
  }).min(1),
};

export const getOrdersSchema = {};

export const updateOrderStatusSchema = {};
