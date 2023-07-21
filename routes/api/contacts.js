const express = require("express");
const ctrl = require("../../controllers/ctrl");
const {
  addContactValidation,
  updateContactValidation,
} = require("../../validators/contacts");
const isValidId = require("../../middlewares");
const validationFavorite = require("../../validators/schemaFavorite");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", addContactValidation, ctrl.addContact);

router.delete("/:id", isValidId , ctrl.deleteById);

router.put("/:id", isValidId, updateContactValidation, ctrl.updateContactById);
router.patch(
  "/:id/favorite",
  isValidId,
  validationFavorite,
  ctrl.updateFavoriteStatus
);

module.exports = router;
