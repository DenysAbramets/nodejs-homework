const express = require("express");
const ctrl = require("../../controllers/auth");
const {
  userValidation,
  emailValidation,
} = require("../../validators/users/users");
const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", userValidation, ctrl.register);
router.post("/login", userValidation, ctrl.login);
router.get("/verify/:verificationToken", ctrl.getCurrentVerificationToken);
router.post("/verify", emailValidation, ctrl.resendEmailVerification);

router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatars
);

module.exports = router;
