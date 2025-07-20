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

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "36000m",
    });

    res.json({
      error: false,
      user,
      accessToken,
      messsage: "Registration successfully",
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

    const accessToken = jwt.sign(
      {
        user: userInfo,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "36000m",
      }
    );

    res.json({
      error: false,
      message: "Login successfully",
      accessToken,
    });
    console.log("Decoded user from token:", req.user);
  } catch (err) {
    res.status(500).json({ error: true, message: "Server error" });
  }
};
