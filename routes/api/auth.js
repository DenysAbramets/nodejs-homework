const express = require("express");
const ctrl = require("../../controllers/auth");
const userValidation = require("../../validators/users/users");
const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", userValidation, ctrl.register);
router.post("/login", userValidation, ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatars
);

module.exports = router;
