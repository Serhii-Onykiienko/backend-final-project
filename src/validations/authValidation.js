import { Joi, Segments } from "celebrate";

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).max(32).trim().required(),
    tel: Joi.string().pattern(/^\+380\d{9}$/).required(),
    email: Joi.string().email().max(64).trim().required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    
    tel: Joi.string()
    .pattern(/^0\d{9}$/)
    .required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};

export const requestResetEmailSchema = {
  [Segments.BODY]: Joi.object({ 
    email: Joi.string().email().required() 
  }),
};

export const resetPasswordSchema = {
  [Segments.BODY]: Joi.object({
    token: Joi.string().required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};
