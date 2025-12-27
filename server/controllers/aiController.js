// controllers/aiController.js

const analyzeResumeWithAI = require("../utils/aiAnalyzer");

exports.aiResumeAnalysis = async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({
        error: "Resume text is required"
      });
    }

    const aiFeedback = await analyzeResumeWithAI(resumeText);

    res.json({
      success: true,
      aiFeedback
    });

  } catch (error) {
    res.status(500).json({
      error: "AI resume analysis failed"
    });
  }
};
