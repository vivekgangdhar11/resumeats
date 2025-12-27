const axios = require("axios");

async function analyzeResumeWithAI(resumeText) {
  const limitedText = resumeText.slice(0, 3000);

  const prompt = `
You are a professional ATS resume reviewer.

Analyze the following resume and provide:
1. ATS friendliness score out of 100
2. Missing technical skills
3. Section-wise improvement suggestions
4. Formatting and clarity advice

Resume Text:
${limitedText}
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "allenai/olmo-3.1-32b-think:free",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000",
          "X-Title": "AI Resume Analyzer"
        }
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error("OpenRouter Error:", error.response?.data || error.message);
    return "AI analysis failed due to API limitation. Please retry.";
  }
}


module.exports = analyzeResumeWithAI;
