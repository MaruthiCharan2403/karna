import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import bodyParser from 'body-parser';
import examroutes from './routes/Exam.js'; 
import userroutes from './routes/Userroutes.js';
import doubtsolve from './routes/Doubtsolve.js';
import studyplan from './routes/Studyplan.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(bodyParser.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use('/api/user', userroutes);
app.use('/api/exam', examroutes);
app.use('/api/studyplan', studyplan);
app.use('/api/doubtsolve', doubtsolve);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
