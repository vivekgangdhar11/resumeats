const mongoose = require("mongoose");

const resumeAnalysisSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  atsScore: Number,
  suggestions: Array,
  aiFeedback: String
}, { timestamps: true });

module.exports = mongoose.model("ResumeAnalysis", resumeAnalysisSchema);
