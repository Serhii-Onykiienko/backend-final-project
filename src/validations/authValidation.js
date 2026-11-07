import { Joi, Segments } from "celebrate";

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).max(32).trim().required(),
    email: Joi.string().email().max(64).trim().required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    phone: Joi.string().max(20).trim().required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};

export const requestResetEmailSchema = {
  [Segments.BODY]: Joi.object({}),
};

export const resetPasswordSchema = {
  [Segments.BODY]: Joi.object({}),
};
