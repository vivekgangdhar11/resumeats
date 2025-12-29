require("dotenv").config();

const express = require("express");
const cors = require("cors");
const analysisRoutes = require("./routes/analysisRoutes");
const aiRoutes = require("./routes/aiRoutes");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");



const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Resume Analyzer Backend Running");
});

const uploadRoutes = require("./routes/uploadRoutes");
app.use("/api", uploadRoutes);
app.use("/api", analysisRoutes);
app.use("/api", aiRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    `API Key loaded: ${process.env.OPENROUTER_API_KEY ? "✅ Yes" : "❌ No"}`
  );
});
