const express = require("express")

const { summaryController, paragraphController, chatController, jsController } = require("../controller/geminiController")

const router = express.Router()

// routes
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatController);
router.post("/js", jsController);

module.exports = router