const express = require("express");
const ctrl = require("../../controllers/ctrl");
const {
  addContactValidation,
  updateContactValidation,
} = require("../../validators/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", addContactValidation, ctrl.addContact);

router.delete("/:id", ctrl.deleteById);

router.put("/:id", updateContactValidation, ctrl.updateContactById);

module.exports = router;
