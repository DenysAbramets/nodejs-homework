const express = require("express");
const ctrl = require("../../controllers/ctrl");
const {
  addContactValidation,
  updateContactValidation,
} = require("../../validators/contacts/contacts");
const { isValidId, authenticate } = require("../../middlewares");
const validationFavorite = require("../../validators/contacts/schemaFavorite");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, addContactValidation, ctrl.addContact);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:id",
  authenticate,
  isValidId,
  updateContactValidation,
  ctrl.updateContactById
);
router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validationFavorite,
  ctrl.updateFavoriteStatus
);

module.exports = router;
