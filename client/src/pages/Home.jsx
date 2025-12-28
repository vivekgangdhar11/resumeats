import React, { useState } from "react";
import UploadResume from "../components/UploadResume.jsx";
import Result from "../components/Result.jsx";

function Home() {
  const [result, setResult] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📋 AI Resume Analyzer</h1>
        <p style={styles.subtitle}>
          Optimize your resume for ATS systems with AI-powered insights
        </p>
      </div>

      <UploadResume onResult={setResult} />

      {result && <Result data={result} />}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: "center",
  },
  title: {
    color: "#333",
    margin: "0 0 10px 0",
  },
  subtitle: {
    color: "#666",
    margin: "0",
  },
};

export default Home;
