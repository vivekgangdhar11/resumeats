const fs = require("fs");
const pdf = require("pdf-parse");
const mammoth = require("mammoth");

async function extractText(filePath, fileType) {
  if (fileType === "application/pdf") {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  }

  if (fileType.includes("word")) {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  }

  return "";
}

module.exports = extractText;
