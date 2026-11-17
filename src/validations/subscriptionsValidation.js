import { Joi, Segments } from "celebrate";

export const createSubscriptionSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.base": "Email must be a string",
        "string.email": "Please enter a valid email address",
        "any.required": "Email is required",
        "string.empty": "Email cannot be empty",
      }),
  }),
};