const User = require("../models/user.model");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: true, message: "Server error" });
  }
};
