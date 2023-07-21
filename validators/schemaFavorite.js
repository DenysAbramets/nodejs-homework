const { HttpError } = require("../helpers");
const Joi = require("joi");

const addSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const validationFavorite = (req, res, next) => {
  const { error } = addSchema.validate(req.body);

  if (error) {
    if (error.details[0].type === "any.required") {
      throw HttpError(400, `missing field ${error.details[0].context.key}`);
    } else {
      throw HttpError(400, error.message);
    }
  }

  return next();
};

module.exports = validationFavorite;
