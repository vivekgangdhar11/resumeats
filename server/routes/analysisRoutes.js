// routes/analysisRoutes.js

const express = require("express");
const { analyzeResume } = require("../controllers/analysisController");
const auth = require("../middleware/authMiddleware");




const router = express.Router();

// POST /api/analyze
router.post("/analyze", analyzeResume);
router.post("/analyze", auth, analyzeResume);

module.exports = router;
