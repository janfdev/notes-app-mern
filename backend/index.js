require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
mongoose.connect(process.env.MONGO_URL);

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => res.json({ message: "API running" }));

app.use("/api/auth", require("./src/modules/auth/routes/auth.routes"));
app.use("/api/notes", require("./src/modules/notes/routes/note.routes"));
app.use("/api/users", require("./src/modules/user/routes/user.routes"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
