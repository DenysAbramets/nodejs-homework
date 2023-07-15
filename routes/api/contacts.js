const express = require("express");
const ctrl = require("../../controllers/ctrl");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.addContact);

router.delete("/:id", ctrl.deleteById);

router.put("/:id", ctrl.updateContactById);

module.exports = router;
