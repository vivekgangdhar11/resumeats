const calculateATSScore = require("../utils/atsScorer");
const analyzeResumeWithAI = require("../utils/aiAnalyzer");

exports.analyzeResume = async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({ error: "Resume text is required" });
    }

    console.log("📝 Analyzing resume...");

    const jobKeywords = ["javascript", "react", "node", "mongodb", "express"];
    const skills = ["javascript", "react", "node", "html", "css"];

    // Rule-based ATS score
    const ruleBased = calculateATSScore(resumeText, jobKeywords, skills);

    console.log("✅ ATS score calculated:", ruleBased.atsScore);

    // AI analysis
    console.log("🤖 Calling AI analyzer...");
    const aiFeedback = await analyzeResumeWithAI(resumeText);
    console.log("✅ AI feedback received");

    res.json({
      success: true,
      atsScore: ruleBased.atsScore,
      breakdown: ruleBased.breakdown,
      ruleBasedSuggestions: ruleBased.suggestions,
      aiFeedback,
    });
  } catch (error) {
    console.error("❌ Analysis Error:", error.message);
    console.error("❌ Full Error:", error);
    res.status(500).json({
      error: "Resume analysis failed",
      details: error.message,
    });
  }
};
