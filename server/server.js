const express = require("express");
const cors = require("cors");
const analysisRoutes = require("./routes/analysisRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Resume Analyzer Backend Running");
});

const uploadRoutes = require("./routes/uploadRoutes");
app.use("/api", uploadRoutes);
app.use("/api", analysisRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
