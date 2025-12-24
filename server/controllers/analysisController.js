// controllers/analysisController.js

const calculateATSScore = require("../utils/atsScorer");

exports.analyzeResume = async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({ error: "Resume text is required" });
    }

    // Example job keywords & skills (can be dynamic later)
    const jobKeywords = [
      "javascript",
      "react",
      "node",
      "mongodb",
      "express"
    ];

    const skills = [
      "javascript",
      "react",
      "node",
      "html",
      "css"
    ];

    const result = calculateATSScore(
      resumeText,
      jobKeywords,
      skills
    );

    res.json({
      success: true,
      result
    });

  } catch (error) {
    res.status(500).json({ error: "ATS analysis failed" });
  }
};
