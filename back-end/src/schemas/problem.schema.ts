import Joi from "joi";

export const problemSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    input_description: Joi.string().required(),
    output_description: Joi.string().required(),
    mb_memory_limit: Joi.number().max(10).min(0.5).required(),
    seconds_limit: Joi.number().max(10).required(),
});

