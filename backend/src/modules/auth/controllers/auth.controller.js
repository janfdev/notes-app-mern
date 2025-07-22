const jwt = require("jsonwebtoken");
const User = require("../../user/models/user.model");

exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({
      error: true,
      message: "All fields required",
    });
  }

  try {
    const isUser = await User.findOne({ email });

    if (isUser) {
      return res.status(409).json({
        error: true,
        message: "User already exists",
      });
    }

    const user = new User({ fullName, email, password });
    await user.save();

    const payload = {
      userId: user._id,
      email: user.email,
    };

    const accessToken = jwt.sign(payload, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "36000m", // 25 hari
    });

    res.json({
      error: false,
      user,
      accessToken,
      message: "Registration successful",
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Server error",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: "Email and password required",
    });
  }

  try {
    const userInfo = await User.findOne({ email });

    if (!userInfo || userInfo.password !== password) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid Credentials" });
    }

    const payload = {
      userId: userInfo._id,
      email: userInfo.email,
    };

    const accessToken = jwt.sign(payload, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "36000m",
    });

    res.json({
      error: false,
      message: "Login successful",
      accessToken,
    });
  } catch (err) {
    res.status(500).json({ error: true, message: "Server error" });
  }
};
