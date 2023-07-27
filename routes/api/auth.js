const express = require("express");
const ctrl = require("../../controllers/auth");
const userValidation = require("../../validators/users/users");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", userValidation, ctrl.register);
router.post("/login", userValidation, ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);

module.exports = router;
