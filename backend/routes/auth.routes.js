const express = require("express");

const router = express.Router();
const authController = require("../controllers/auth.controller");
const { authenticateToken } = require("../utilities/authenticateToken");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
