const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  if (!isValidObjectId(req.params.id)) {
    next(HttpError(400, `${req.params.id} is not a valid`));
  }
  next();
};
module.exports = isValidId;
