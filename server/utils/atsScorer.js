// utils/atsScorer.js

function calculateATSScore(resumeText, jobKeywords, skills) {
  resumeText = resumeText.toLowerCase();

  // -------------------------
  // 1️⃣ KEYWORD SCORE (40)
  // -------------------------
  let matchedKeywords = 0;
  jobKeywords.forEach(keyword => {
    if (resumeText.includes(keyword.toLowerCase())) {
      matchedKeywords++;
    }
  });

  const keywordScore = (matchedKeywords / jobKeywords.length) * 40;

  // -------------------------
  // 2️⃣ SKILLS SCORE (30)
  // -------------------------
  let matchedSkills = 0;
  skills.forEach(skill => {
    if (resumeText.includes(skill.toLowerCase())) {
      matchedSkills++;
    }
  });

  const skillScore = (matchedSkills / skills.length) * 30;

  // -------------------------
  // 3️⃣ SECTION SCORE (20)
  // -------------------------
  const sections = ["skills", "experience", "education", "projects"];
  let presentSections = 0;

  sections.forEach(section => {
    if (resumeText.includes(section)) {
      presentSections++;
    }
  });

  const sectionScore = (presentSections / sections.length) * 20;

  // -------------------------
  // 4️⃣ FORMATTING SCORE (10)
  // -------------------------
  let formatScore = 10;

  if (resumeText.length > 8000) formatScore -= 3;
  if (!resumeText.includes("•") && !resumeText.includes("-")) formatScore -= 3;

  if (formatScore < 0) formatScore = 0;

  // -------------------------
  // TOTAL SCORE
  // -------------------------
  const totalScore = Math.min(
    Math.round(keywordScore + skillScore + sectionScore + formatScore),
    100
  );

  // -------------------------
  // SUGGESTIONS
  // -------------------------
  let suggestions = [];

  if (keywordScore < 20)
    suggestions.push("Add more job-related keywords");

  if (skillScore < 15)
    suggestions.push("Improve your skills section");

  if (!resumeText.includes("projects"))
    suggestions.push("Add a Projects section");

  if (!resumeText.includes("experience"))
    suggestions.push("Add relevant work experience");

  return {
    atsScore: totalScore,
    breakdown: {
      keywordScore,
      skillScore,
      sectionScore,
      formatScore
    },
    suggestions
  };
}

module.exports = calculateATSScore;
