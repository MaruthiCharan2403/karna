import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI);
router.post('/askquestion', async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = req.body.message;
    console.log(prompt);
    const text = await model.generateText(prompt);
    console.log(text);
    res.send({ reply: text });
});
export default router;
