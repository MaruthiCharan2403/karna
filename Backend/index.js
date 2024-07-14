import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import examroutes from './routes/Exam.js'; 
import userroutes from './routes/Userroutes.js';
import studyplan from './routes/Studyplan.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb+srv://yssmc24:24051117@karna.my8lusy.mongodb.net/karna', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use('/api/user', userroutes);
app.use('/api/exam', examroutes);
app.use('/api/studyplan', studyplan);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
