import { Joi, Segments } from "celebrate";
import { PHONE_REG_EXP } from "../constants/phoneRegExp.js";

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).max(32).trim().required(),
    tel: Joi.string().pattern(PHONE_REG_EXP).required(),
    email: Joi.string().email().max(64).trim().required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    tel: Joi.string().pattern(PHONE_REG_EXP).required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};

export const requestResetEmailSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
  }),
};

export const resetPasswordSchema = {
  [Segments.BODY]: Joi.object({
    token: Joi.string().required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};
