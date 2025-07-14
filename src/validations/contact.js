import Joi from 'joi';

const joiObjectCreate = {
 name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'name should be a string',
    'string.min': 'name should has min 3 characters',
    'string.max': 'name should has max 20 characters',
    'any.required': 'name is required',
  }),
phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'phone number should be 10 digits',
      'any.required': 'phoneNumber is required',
    }),
email: Joi.string().email().optional().messages({
    'string.email': 'it is not a valid email address',
  }),
isFavourite: Joi.boolean().default(false),
contactType: Joi.string().valid('work', 'home', 'personal').required(),
};

export const createContactSchema = Joi.object(joiObjectCreate);



const joiObjectUpdate = {
 name: Joi.string().min(3).max(20).optional().messages({
    'string.base': 'name should be a string',
    'string.min': 'name should has min 3 characters',
    'string.max': 'name should has max 20 characters',
  }),
 phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional()
    .messages({
      'string.pattern.base': 'phone number should be 10 digits',
    }),
email: Joi.string().email().optional().messages({
    'string.email': 'it is not a valid email address',
  }),
isFavourite: Joi.boolean().optional(),
contactType: Joi.string().valid('work', 'home', 'personal').optional(),
};

export const updateContactSchema = Joi.object(joiObjectUpdate)
