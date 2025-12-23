const extractText = require("../utils/extractText");

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // DEBUG LOGS - check terminal when testing
    console.log("📁 File path:", req.file.path);
    console.log("📄 File mimetype:", req.file.mimetype);
    console.log("📂 Current directory:", process.cwd());

    const text = await extractText(req.file.path, req.file.mimetype);
    
    res.json({
      success: true,
      message: "Resume processed successfully",
      extractedText: text.substring(0, 500) + "...",
    });
  } catch (error) {
    console.log("❌ EXACT ERROR:", error.message);
    console.log("❌ FULL ERROR:", error);
    res.status(500).json({ error: "Resume processing failed", details: error.message });
  }
};
