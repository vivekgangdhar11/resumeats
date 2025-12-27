// routes/aiRoutes.js

const express = require("express");
const { aiResumeAnalysis } = require("../controllers/aiController");

const router = express.Router();

// POST /api/ai-analyze
router.post("/ai-analyze", aiResumeAnalysis);

module.exports = router;
