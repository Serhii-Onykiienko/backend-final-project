import { Joi, Segments } from "celebrate";

// Схема, яка каже: "Запит має бути порожнім, жодних додаткових полів у тілі"
const phoneRegExp = /^(?:\+?38)?0[0-9]{9}$/;
export const updateUserSchema = Joi.object({
  name: Joi.string().min(2).max(30).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 2 characters long',
  }),
  surname: Joi.string().min(2).max(30).messages({
    'string.base': 'Surname must be a string',
    'string.min': 'Surname must be at least 2 characters long',
  }),
  tel: Joi.string().pattern(phoneRegExp).messages({
    'string.pattern.base': 'Please enter a valid Ukrainian phone number',
  }),
  city: Joi.string().min(2).messages({
    'string.base': 'City must be a string',
    'string.min': 'City must be at least 2 characters long',
  }),
  postOffice: Joi.alternatives().try(Joi.number(), Joi.string()).messages({
    'alternatives.types': 'Post office must be a number or a string',
  }),
});


export const updateCurrentUserSchema = {};
