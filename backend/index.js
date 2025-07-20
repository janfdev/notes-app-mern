require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config.json");

const app = express();
mongoose.connect(config.connectionString);

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => res.json({ message: "API running" }));

app.use("/auth", require("./src/modules/auth/routes/auth.routes"));
// app.use("/notes", require("./routes/note.routes"));
app.use("/users", require("./src/modules/user/routes/user.routes"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
