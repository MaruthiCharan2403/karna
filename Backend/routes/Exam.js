import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Exam from '../models/Exammodel.js';
import auth from '../middleware/auth.js';
const genAI = new GoogleGenerativeAI("AIzaSyCxXQvDYdbn5a5nWs0cpzC--5pSB5ZENt8");
const router = express.Router();

router.post('/qgen', auth, async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const { examname, examtext, examduration } = req.body;
        console.log(examname, examtext, examduration);
        const userId = req.user._id;
        const sendingtext = `Generate question and answers of exam time ${examduration} for the following text: ${examtext}. The answers should be some big. Give it in JSON format. The JSON should have question, answer, useranswer(empty string), score(0).`;

        const result = await model.generateContent(sendingtext);
        const response = await result.response;
        const text = await response.text();
        console.log('Generated Text:', text);

        const startIndex = text.indexOf('{');
        const endIndex = text.lastIndexOf('}') + 1;
        const jsonResponse = text.substring(startIndex, endIndex);
        const generatedQuestions = JSON.parse(jsonResponse).questions;

        const exam = new Exam({
            examname: examname,
            userid: userId,
            examtext: examtext,
            questions: generatedQuestions.map(question => ({
                question: question.question,
                answer: question.answer,
                useranswer: '',
                score: 0
            })),
            examdate: new Date(),
            examduration: examduration,
            exammarks: 0,
            examstatus: false
        });

        await exam.save();
        res.send({ exam });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'An error occurred while processing your request.' });
    }
});

router.put('/check/:examId', auth, async (req, res) => {
    const examId = req.params.examId;
    const { answers } = req.body;
    try {
        // Retrieve exam details
        const exam = await Exam.findById(examId);
        if (!exam) {
            return res.status(404).send({ error: 'Exam not found' });
        }

        // Validate answers format and update user answers in exam
        exam.questions.forEach((question, index) => {
            if (answers[index] && typeof answers[index] === 'string') {
                question.useranswer = answers[index];
            }
        });

        // Generate scores using Gemini API
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const sendingText = JSON.stringify(exam.questions.map(question => ({
            question: question.question,
            answer: question.answer,
            useranswer: question.useranswer,
            score: 0 // Initialize score
        })));
        const sendtext = 'Generate scores for the following questions and answers. The answers are user answers.Award the score based on the correctness of the answer in range of 0 to 10 but not in decimals.'+sendingText;
        const result = await model.generateContent(sendtext);
        const response = await result.response;
        const text = await response.text();
        const jsonResponse = JSON.parse(text);

        // Update exam with scores
        exam.questions.forEach((question, index) => {
            question.score = jsonResponse[index].score;
        });

        // Calculate average score
        const totalScore = exam.questions.reduce((sum, question) => sum + question.score, 0);
        exam.exammarks = totalScore / exam.questions.length;
        exam.examstatus = true; // Set exam status to true

        // Save updated exam
        await exam.save();

        // Respond with updated exam details
        res.send({ exam });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'An error occurred while processing your request.' });
    }
});
router.get('/getexam/:examId', auth, async (req, res) => {
    const examId = req.params.examId;
    try {
        const exam = await Exam.findById(examId);
        if (!exam) {
            return res.status(404).send({ error: 'Exam not found' });
        }
        res.send({ questions: exam.questions, examduration: exam.examduration });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'An error occurred while processing your request.' });
    }

});
router.get('/results/:examId', auth, async (req, res) => {
    const examId = req.params.examId;
    try {
        const exam = await Exam.findById(examId);
        if (!exam) {
            return res.status(404).send({ error: 'Exam not found' });
        }
        res.send({ exam });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'An error occurred while processing your request.' });
    }
});

export default router;

