const express = require("express");

const router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../../../shared/middlewares/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
