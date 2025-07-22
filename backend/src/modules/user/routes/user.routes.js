const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const authMiddleware = require("../../../shared/middlewares/authMiddleware");
router.get("/me", authMiddleware, userController.getUser);

module.exports = router;
