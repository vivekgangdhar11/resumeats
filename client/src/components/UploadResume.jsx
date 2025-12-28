import React, { useState } from "react";
import axios from "axios";

function UploadResume({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      setError("Please upload a resume");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);
    setError(null);

    try {
      // 1️⃣ Upload resume
      console.log("🔄 Uploading resume...");
      const uploadRes = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("✅ Resume uploaded:", uploadRes.data);

      // 2️⃣ Analyze resume
      console.log("🔄 Analyzing resume...");
      const analysisRes = await axios.post(
        "http://localhost:5000/api/analyze",
        {
          resumeText: uploadRes.data.extractedText,
        }
      );

      console.log("✅ Analysis complete:", analysisRes.data);
      onResult(analysisRes.data);
    } catch (error) {
      console.error("❌ Error details:", error);
      const errorMsg =
        error.response?.data?.error || error.message || "Something went wrong";
      setError(errorMsg);
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2>Upload Resume</h2>

      {error && <div style={styles.error}>{error}</div>}

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => {
          setFile(e.target.files[0]);
          setError(null);
        }}
        disabled={loading}
        style={styles.input}
      />

      {file && <p style={styles.fileName}>📄 {file.name}</p>}

      <button
        onClick={handleUpload}
        disabled={loading}
        style={{
          ...styles.button,
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "⏳ Analyzing..." : "🚀 Analyze Resume"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    display: "block",
    width: "100%",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
  },
  error: {
    color: "red",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#ffe6e6",
    borderRadius: "4px",
  },
  fileName: {
    color: "green",
    marginBottom: "10px",
  },
};

export default UploadResume;
