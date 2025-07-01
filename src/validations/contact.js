import Joi from 'joi';

const joiObject = {
name: Joi.string().min(3).max(20).required(),
phoneNumber: Joi.number().integer().min(6).max(16).required(),
email: Joi.string().min(3).max(20).required(),
isFavourite: Joi.boolean(),
contactType: Joi.string().valid('work', 'home', 'personal').required(),
};

export const createContactSchema = Joi.object(joiObject);