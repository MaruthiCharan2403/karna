import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import auth from '../middleware/auth.js';
const genAI = new GoogleGenerativeAI("AIzaSyCxXQvDYdbn5a5nWs0cpzC--5pSB5ZENt8");
const router = express.Router();
router.post('/studyplan', auth, async (req, res) => {
    const {studyplan} = req.body;
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const sendingtext = `Generate study plan for the following text: ${studyplan}. The study plan should be in JSON format.`;
        const result = await model.generateContent(sendingtext);
        const response = await result.response;
        const text = await response.text();
        console.log('Generated Text:', text);
        const startIndex = text.indexOf('{');
        const endIndex = text.lastIndexOf('}') + 1;
        const jsonResponse = text.substring(startIndex, endIndex);
        const generatedStudyplan = JSON.parse(jsonResponse).studyplan;
        res.send({ studyplan: generatedStudyplan });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'An error occurred while processing your request.' });
    }
});
export default router;
