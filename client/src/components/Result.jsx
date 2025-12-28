import React from "react";

function Result({ data }) {
  if (!data) return null;

  const atsScore = data.atsScore || 0;
  const breakdown = data.breakdown || {};
  const ruleBasedSuggestions = data.ruleBasedSuggestions || [];
  const aiFeedback = data.aiFeedback || "No AI feedback available";

  return (
    <div style={styles.container}>
      <div style={styles.scoreCard}>
        <h2 style={styles.scoreTitle}>👨 ATS Score: {atsScore}/100</h2>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          {atsScore >= 75
            ? "✅ Excellent"
            : atsScore >= 50
            ? "⚠️ Good"
            : "❌ Needs Improvement"}
        </p>
      </div>

      <h3>📊 Score Breakdown</h3>
      <div style={styles.breakdown}>
        <div style={styles.scoreItem}>
          <span>Keyword Score:</span>
          <span style={styles.scoreValue}>{breakdown.keywordScore || 0}%</span>
        </div>
        <div style={styles.scoreItem}>
          <span>Skill Score:</span>
          <span style={styles.scoreValue}>{breakdown.skillScore || 0}%</span>
        </div>
        <div style={styles.scoreItem}>
          <span>Section Score:</span>
          <span style={styles.scoreValue}>{breakdown.sectionScore || 0}%</span>
        </div>
        <div style={styles.scoreItem}>
          <span>Format Score:</span>
          <span style={styles.scoreValue}>{breakdown.formatScore || 0}%</span>
        </div>
      </div>

      <h3>💡 Improvement Suggestions</h3>
      {ruleBasedSuggestions.length > 0 ? (
        <ul style={styles.suggestionsList}>
          {ruleBasedSuggestions.map((s, i) => (
            <li key={i} style={styles.suggestionItem}>
              {s}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "#666" }}>No suggestions at this time</p>
      )}

      <h3>🤖 AI Feedback</h3>
      <div style={styles.aiFeedback}>
        <p>{aiFeedback}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    marginTop: "20px",
  },
  scoreCard: {
    backgroundColor: "#e8f4f8",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    borderLeft: "4px solid #007bff",
  },
  scoreTitle: {
    color: "#007bff",
    margin: "0 0 10px 0",
  },
  breakdown: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "20px",
  },
  scoreItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "4px",
    border: "1px solid #e0e0e0",
  },
  scoreValue: {
    fontWeight: "bold",
    color: "#007bff",
  },
  suggestionsList: {
    paddingLeft: "20px",
    marginBottom: "20px",
  },
  suggestionItem: {
    marginBottom: "10px",
    lineHeight: "1.6",
  },
  aiFeedback: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "4px",
    border: "1px solid #e0e0e0",
    lineHeight: "1.6",
  },
};

export default Result;
