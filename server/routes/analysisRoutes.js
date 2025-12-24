// routes/analysisRoutes.js

const express = require("express");
const { analyzeResume } = require("../controllers/analysisController");

const router = express.Router();

// POST /api/analyze
router.post("/analyze", analyzeResume);

module.exports = router;
