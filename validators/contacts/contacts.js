const { HttpError } = require("../../helpers");
const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const addContactValidation = (req, res, next) => {
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

const updateContactValidation = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }

  const { error } = addSchema.validate(req.body);

  if (error) {
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

module.exports = { addContactValidation, updateContactValidation };
