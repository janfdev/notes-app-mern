const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utilities/authenticateToken");
const User = require("../models/user.model");

router.get("/me", authenticateToken, authController.getUser);


router.put("/:id", authenticateToken, async (req, res) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).json({ message: "Akses ditolak" });
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedUser);
});

module.exports = router;
