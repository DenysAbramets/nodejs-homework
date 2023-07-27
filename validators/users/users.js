const Joi = require("joi");
const { HttpError } = require("../../helpers");


const addSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});


const userValidation  = (req, res, next) => {
    const { error } = addSchema.validate(req.body);
  
    if (error) {
      console.log(error);
      if (error.details[0].type === "any.required") {
        throw HttpError(
          400,
          `missing required ${error.details[0].context.key} field`
        );
      } else {
        throw HttpError(400, error.message);
      }
    }
  
    return next();
  };



module.exports = userValidation;
