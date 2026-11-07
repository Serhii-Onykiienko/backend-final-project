import { Joi, Segments } from "celebrate";

// Схема, яка каже: "Запит має бути порожнім, жодних додаткових полів у тілі"
export const getCurrentUserSchema = Joi.object().unknown(fals);


export const updateCurrentUserSchema = {
    [Segments.BODY]: Joi.object({
    email:Joi.string().email().max(64).trim().optional(),    
    password: Joi.string().min(8).max(128).optional(),
    telephone: Joi.string().min(10).max(15).trim().optional(),
    
    }),
};
