import Joi from "joi";

export const submissionSchema = Joi.object({
    code: Joi.string().required()
});
