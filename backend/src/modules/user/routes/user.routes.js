const express = require("express");
const router = express.Router();
// const {
//   authenticateToken,
// } = require("../../../shared/utils/authenticateToken");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../../../shared/middlewares/authMiddleware");
router.get("/me", authMiddleware, userController.getUser);
router.put("/:id", authMiddleware, userController.editUser);

module.exports = router;
