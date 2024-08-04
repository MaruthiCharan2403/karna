import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI);
router.post('/askquestion', async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = req.body.message;
    console.log(prompt);
    const conversationHistory = req.session.conversationHistory || [];
    conversationHistory.push(prompt);
    const result = await model.generateContent(conversationHistory.join(' '));
    const response = await result.response;
    const text = await response.text();
    req.session.conversationHistory = conversationHistory;
    res.send({ reply: text });
});
export default router;
