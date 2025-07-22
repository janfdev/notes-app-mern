const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note.controller");
const authMiddleware = require("../../../shared/middlewares/authMiddleware");

router.get("/", authMiddleware, noteController.getAllNotes);
router.get("/search", authMiddleware, noteController.searchNotes);
router.post("/", authMiddleware, noteController.addNote);   
router.get("/:id", authMiddleware, noteController.getNoteById);
router.put("/:id", authMiddleware, noteController.editNote);
router.delete("/:id", authMiddleware, noteController.deleteNote);
router.patch("/:id/pin", authMiddleware, noteController.updatePinned);

module.exports = router;
